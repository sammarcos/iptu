// --- InfoRow.jsx ---------------

export default function InfoRow({ label, value, t, highlight, color }) {
  return (
    <div>
      <div
        style={{
          fontSize: 10,
          color: t.textMuted,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
          marginBottom: 2,
          fontFamily: "'Share Tech Mono', monospace",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: highlight ? 16 : 13,
          fontWeight: highlight ? 700 : 500,
          color: highlight ? color || t.accent : t.text,
          fontFamily: highlight
            ? "'Rajdhani', sans-serif"
            : "'Share Tech Mono', monospace",
          textShadow: highlight ? `0 0 8px ${color}66` : 'none',
        }}
      >
        {value}
      </div>
    </div>
  );
}
