// Spoiler-Schutz für das Brautpaar: Merker in Cookie und localStorage (doppelt hält besser).
const KEY = 'brautpaar';

export function isBrautpaar(): boolean {
  try { if (localStorage.getItem(KEY) === '1') return true; } catch {}
  return document.cookie.split('; ').includes(`${KEY}=1`);
}

export function setBrautpaar(on: boolean): boolean {
  const maxAge = on ? 60 * 60 * 24 * 400 : 0; // 400 Tage = Browser-Höchstwert
  document.cookie = `${KEY}=${on ? '1' : ''}; max-age=${maxAge}; path=/; SameSite=Lax; Secure`;
  try { on ? localStorage.setItem(KEY, '1') : localStorage.removeItem(KEY); } catch {}
  return !on || isBrautpaar();
}
