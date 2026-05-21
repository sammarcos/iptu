// assets/pages/Boletos.jsx
import React, { useState, useMemo } from 'react';
import { themes } from '../lib/themes.js';
import { boletosData } from '../data/boletosData.js';
import BoletoCard from '../components/BoletoCard.jsx';
import Header from '../components/Header.jsx';
import SummaryCards from '../components/SummaryCards.jsx';
import FilterBar from '../components/FilterBar.jsx';
import EmptyState from '../components/EmptyState.jsx';

export default function BoletosPage() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState('todos');
  const [sortBy, setSortBy] = useState('id');

  const t = dark ? themes.dark : themes.light;

  const filtered = useMemo(() => {
    let list = [...boletosData];
    if (filter === 'pago') list = list.filter((b) => b.status === 'pago');
    if (filter === 'nao_pago') list = list.filter((b) => b.status !== 'pago');

    list.sort((a, b) => {
      if (sortBy === 'parcela') return a.parcela - b.parcela;
      if (sortBy === 'id') return a.id.localeCompare(b.id);
      if (sortBy === 'valor') return a.valor - b.valor;
      if (sortBy === 'vencimento')
        return new Date(a.vencimento) - new Date(b.vencimento);
      return 0;
    });
    return list;
  }, [filter, sortBy]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${t.bg}; min-height: 100vh; transition: background 0.3s; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${t.accent}; }
        button:focus { outline: none; }
      `}</style>

      <div
        style={{
          background: t.bg,
          minHeight: '100vh',
          transition: 'background 0.3s, color 0.3s',
          fontFamily: "'Rajdhani', sans-serif",
        }}
      >
        <Header dark={dark} toggleTheme={() => setDark((v) => !v)} t={t} />

        <main
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '28px 20px 60px',
          }}
        >
          {/* Page title */}
          <div style={{ marginBottom: 24 }}>
            <h1
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 22,
                fontWeight: 900,
                color: t.text,
                letterSpacing: 2,
                marginBottom: 6,
              }}
            >
              CENTRAL DE{' '}
              <span
                style={{ color: t.accent, textShadow: `0 0 12px ${t.accent}` }}
              >
                BOLETOS
              </span>
            </h1>
            <p
              style={{
                fontSize: 13,
                color: t.textMuted,
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: 0.5,
              }}
            >
              &gt;_ monitoramento de pagamentos em tempo real
            </p>
          </div>

          <SummaryCards boletos={boletosData} t={t} />

          <FilterBar
            filter={filter}
            setFilter={setFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            t={t}
          />

          {filtered.length === 0 ? (
            <EmptyState t={t} />
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 16,
              }}
            >
              {filtered.map((b) => (
                <BoletoCard key={b.id} b={b} t={t} />
              ))}
            </div>
          )}

          <footer
            style={{
              textAlign: 'center',
              marginTop: 48,
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11,
              color: t.textMuted,
              letterSpacing: 1.5,
            }}
          >
            BOLTPAY SYS // {new Date().getFullYear()} // ENCRYPTED_CONN_ACTIVE
          </footer>
        </main>
      </div>
    </>
  );
}
