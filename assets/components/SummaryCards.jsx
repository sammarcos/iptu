// --- SummaryCards.jsx ---------------
import {
  FaListUl,
  FaCheckCircle,
  FaExclamationTriangle,
  FaWallet,
} from 'react-icons/fa';
import { fmt } from '../utils/helpers.js';

export default function SummaryCards({ boletos, t }) {
  const total = boletos.length;
  const pagos = boletos.filter((b) => b.status === 'pago').length;
  const nPagos = total - pagos;
  const valorTotal = boletos.reduce((s, b) => s + b.valor, 0);
  const valorPago = boletos
    .filter((b) => b.status === 'pago')
    .reduce((s, b) => s + b.valor, 0);

  const cards = [
    {
      icon: <FaListUl />,
      label: 'Total de Boletos',
      value: total,
      color: t.accentPurple,
    },
    { icon: <FaCheckCircle />, label: 'Pagos', value: pagos, color: t.paid },
    {
      icon: <FaExclamationTriangle />,
      label: 'Pendentes',
      value: nPagos,
      color: t.unpaid,
    },
    {
      icon: <FaWallet />,
      label: 'Total Pago',
      value: fmt(valorPago),
      color: t.accentYellow,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 12,
        marginBottom: 28,
      }}
    >
      {cards.map((c, i) => (
        <div
          key={i}
          style={{
            background: t.bgCard,
            border: `1px solid ${c.color}55`,
            borderRadius: 6,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: `0 0 16px ${c.color}15`,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: c.color,
              textShadow: `0 0 10px ${c.color}`,
            }}
          >
            {c.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                color: t.textMuted,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              {c.label}
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: c.color,
                fontFamily: "'Rajdhani', sans-serif",
                textShadow: `0 0 8px ${c.color}55`,
              }}
            >
              {c.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
