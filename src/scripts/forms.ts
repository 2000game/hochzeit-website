import { API_URL } from '../data/config';

type Json = Record<string, unknown>;

export async function postJson(payload: Json, url = API_URL): Promise<{ ok: boolean; error?: string }> {
  // text/plain vermeidet den CORS-Preflight bei Apps Script.
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
  return res.json();
}

export async function getJson(action: string): Promise<any> {
  const res = await fetch(`${API_URL}${API_URL.includes('?') ? '&' : '?'}action=${encodeURIComponent(action)}`);
  return res.json();
}

function fieldValue(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string | boolean {
  return el instanceof HTMLInputElement && el.type === 'checkbox' ? el.checked : el.value.trim();
}

/** Liest ein Formular: Felder mit name= auf Top-Level, Personenzeilen (.person) mit data-f= als persons[]. */
export function collect(form: HTMLFormElement): Json {
  const data: Json = {};
  form.querySelectorAll<HTMLInputElement>('[name]').forEach((el) => {
    if (!el.closest('.person')) data[el.name] = fieldValue(el);
  });
  const persons: Json[] = [];
  form.querySelectorAll('.person').forEach((row) => {
    const p: Json = {};
    row.querySelectorAll<HTMLInputElement>('[data-f]').forEach((el) => (p[el.dataset.f!] = fieldValue(el)));
    persons.push(p);
  });
  if (form.querySelector('.person')) data.persons = persons;
  return data;
}

export function setupForm(form: HTMLFormElement, onSuccess?: () => void, url = API_URL) {
  const msg = form.querySelector<HTMLElement>('.form-msg')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const show = (text: string, cls: 'ok' | 'error') => { msg.textContent = text; msg.className = `form-msg ${cls}`; };
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!url) return show('Die Formulare sind noch nicht aktiv.', 'error');
    btn.disabled = true;
    show('Wird gesendet …', 'ok');
    try {
      const r = await postJson({ action: form.dataset.action, ...collect(form) }, url);
      if (r.ok) {
        show('Danke! Das hat geklappt.', 'ok');
        if (form.dataset.reset !== 'no') form.reset();
        onSuccess?.();
      } else show(r.error || 'Das hat leider nicht geklappt.', 'error');
    } catch {
      show('Senden fehlgeschlagen. Bitte versuche es später noch einmal.', 'error');
    } finally {
      btn.disabled = false;
    }
  });
}

/** Dynamische Personenzeilen: Hinzufügen/Entfernen anhand von <template>. */
export function setupPersons(form: HTMLFormElement) {
  const list = form.querySelector<HTMLElement>('.persons')!;
  const tpl = form.querySelector<HTMLTemplateElement>('template')!;
  const max = 10;
  const add = () => {
    if (list.children.length >= max) return;
    list.appendChild(tpl.content.cloneNode(true));
    refresh();
  };
  const refresh = () => {
    const rows = list.querySelectorAll('.person');
    rows.forEach((r, i) => {
      const rm = r.querySelector<HTMLButtonElement>('.remove');
      if (rm) rm.hidden = rows.length === 1;
      const h = r.querySelector('.person-title'); if (h) h.textContent = `Person ${i + 1}`;
    });
    const addBtn = form.querySelector<HTMLButtonElement>('.add-person');
    if (addBtn) addBtn.disabled = rows.length >= max;
  };
  form.querySelector('.add-person')?.addEventListener('click', add);
  list.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.classList.contains('remove')) { t.closest('.person')?.remove(); refresh(); }
  });
  form.addEventListener('reset', () => setTimeout(() => { list.innerHTML = ''; add(); }));
  add();
}
