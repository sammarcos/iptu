// --- ActionButton.jsx ------------

export default function ActionButton({ icon, label, href, disabled, t, pink }) {
  const color = pink ? t.accentPink : t.accent;
  return (
    <button
      onClick={() => href && window.open(href, '_blank')}
      disabled={disabled}
      title={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 0.8,
        textTransform: 'uppercase',
        border: `1px solid ${disabled ? t.border : color}`,
        borderRadius: 4,
        background: disabled
          ? 'transparent'
          : pink
            ? `rgba(255,45,120,0.07)`
            : `rgba(0,255,229,0.07)`,
        color: disabled ? t.textMuted : color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: disabled
          ? 'none'
          : pink
            ? `0 0 8px rgba(255,45,120,0.2)`
            : `0 0 8px rgba(0,255,229,0.2)`,
        transition: 'all 0.2s',
        opacity: disabled ? 0.4 : 1,
        fontFamily: "'Rajdhani', sans-serif",
      }}
      onMouseEnter={(e) => {
        if (!disabled)
          e.currentTarget.style.boxShadow = pink
            ? `0 0 16px rgba(255,45,120,0.45)`
            : `0 0 16px rgba(0,255,229,0.45)`;
      }}
      onMouseLeave={(e) => {
        if (!disabled)
          e.currentTarget.style.boxShadow = pink
            ? `0 0 8px rgba(255,45,120,0.2)`
            : `0 0 8px rgba(0,255,229,0.2)`;
      }}
    >
      {icon}
      {label}
    </button>
  );
}
