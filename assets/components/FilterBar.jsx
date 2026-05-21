// --- FilterBar.jsx ----------------
import React, { useState } from 'react';
import {
  FaSortNumericDown,
  FaHashtag,
  FaListUl,
  FaCheckCircle,
  FaClock,
  FaWallet,
  FaChevronDown,
  FaFilter,
} from 'react-icons/fa';

export default function FilterBar({ filter, setFilter, sortBy, setSortBy, t }) {
  const [open, setOpen] = useState(false);

  const filterOpts = [
    { key: 'todos', label: 'Todos', icon: <FaListUl /> },
    { key: 'pago', label: 'Pagos', icon: <FaCheckCircle /> },
    { key: 'nao_pago', label: 'Não Pagos', icon: <FaClock /> },
  ];

  const sortOpts = [
    { key: 'parcela', label: 'Nº Parcela', icon: <FaSortNumericDown /> },
    { key: 'id', label: 'ID', icon: <FaHashtag /> },
    { key: 'valor', label: 'Valor', icon: <FaWallet /> },
    { key: 'vencimento', label: 'Vencimento', icon: <FaClock /> },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        marginBottom: 24,
        padding: '14px 16px',
        background: t.filterBg,
        border: `1px solid ${t.filterBorder}`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          color: t.textMuted,
          fontSize: 12,
          letterSpacing: 1,
          marginRight: 4,
          fontFamily: "'Share Tech Mono', monospace",
        }}
      >
        <FaFilter size={11} /> FILTRO
      </div>

      {filterOpts.map((o) => (
        <button
          key={o.key}
          onClick={() => setFilter(o.key)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 14px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.8,
            textTransform: 'uppercase',
            border: `1px solid ${filter === o.key ? t.accent : t.border}`,
            borderRadius: 4,
            background: filter === o.key ? t.btnActive : t.btnBg,
            color: filter === o.key ? t.accent : t.textSecondary,
            cursor: 'pointer',
            boxShadow: filter === o.key ? `0 0 10px ${t.accent}44` : 'none',
            transition: 'all 0.15s',
            fontFamily: "'Rajdhani', sans-serif",
          }}
        >
          {o.icon} {o.label}
        </button>
      ))}

      <div style={{ marginLeft: 'auto', position: 'relative' }}>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 14px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.8,
            textTransform: 'uppercase',
            border: `1px solid ${t.accentPurple}88`,
            borderRadius: 4,
            background: `rgba(180,79,255,0.07)`,
            color: t.accentPurple,
            cursor: 'pointer',
            fontFamily: "'Rajdhani', sans-serif",
          }}
        >
          ORDENAR{' '}
          <FaChevronDown
            size={10}
            style={{
              transform: open ? 'rotate(180deg)' : 'none',
              transition: '0.2s',
            }}
          />
        </button>
        {open && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              right: 0,
              background: t.bgCard,
              border: `1px solid ${t.accentPurple}55`,
              borderRadius: 6,
              overflow: 'hidden',
              zIndex: 50,
              minWidth: 160,
              boxShadow: `0 0 24px rgba(180,79,255,0.2)`,
            }}
          >
            {sortOpts.map((o) => (
              <button
                key={o.key}
                onClick={() => {
                  setSortBy(o.key);
                  setOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '9px 14px',
                  fontSize: 12,
                  fontWeight: 600,
                  background:
                    sortBy === o.key ? `rgba(180,79,255,0.12)` : 'transparent',
                  color: sortBy === o.key ? t.accentPurple : t.textSecondary,
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: 0.8,
                  fontFamily: "'Rajdhani', sans-serif",
                  transition: 'background 0.15s',
                }}
              >
                {o.icon} {o.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
