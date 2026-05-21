// --- Header.jsx ---------------
import { FaBolt, FaSun, FaMoon } from 'react-icons/fa';

export default function Header({ dark, toggleTheme, t }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: t.headerBg,
        borderBottom: `1px solid ${t.border}`,
        padding: '0 24px',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <FaBolt
          size={20}
          style={{
            color: t.accent,
            filter: `drop-shadow(0 0 6px ${t.accent})`,
          }}
        />
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 18,
            fontWeight: 900,
            color: t.text,
            letterSpacing: 2,
          }}
        >
          BOLT<span style={{ color: t.accent }}>PAY</span>
        </span>
        <span
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 10,
            color: t.textMuted,
            letterSpacing: 2,
            marginLeft: 4,
          }}
        >
          v2.0.47
        </span>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '7px 16px',
          border: `1px solid ${t.border}`,
          borderRadius: 20,
          background: t.btnBg,
          color: t.textSecondary,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 0.8,
          fontFamily: "'Rajdhani', sans-serif",
          transition: 'all 0.2s',
        }}
      >
        {dark ? (
          <FaSun size={13} style={{ color: t.accentYellow }} />
        ) : (
          <FaMoon size={13} style={{ color: t.accentPurple }} />
        )}
        {dark ? 'MODO CLARO' : 'MODO ESCURO'}
      </button>
    </header>
  );
}
