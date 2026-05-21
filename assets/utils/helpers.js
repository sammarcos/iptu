// ─── HELPERS ────────────────────────────────────────────────────────────────
export const fmt = (v) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const fmtDate = (d) =>
  new Date(d + 'T00:00:00').toLocaleDateString('pt-BR');
