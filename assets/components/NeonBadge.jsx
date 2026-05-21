// --- src/components/NeonBadge.jsx
import { FaCheckCircle, FaClock } from 'react-icons/fa';

export default function NeonBadge({ pago, t }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: 3,
        border: `1px solid ${pago ? t.paid : t.unpaid}`,
        color: pago ? t.paid : t.unpaid,
        background: pago ? `rgba(0,255,229,0.07)` : `rgba(255,45,120,0.07)`,
        boxShadow: pago
          ? `0 0 8px rgba(0,255,229,0.3)`
          : `0 0 8px rgba(255,45,120,0.3)`,
      }}
    >
      {pago ? <FaCheckCircle size={10} /> : <FaClock size={10} />}
      {pago ? 'Pago' : 'Pendente'}
    </span>
  );
}
