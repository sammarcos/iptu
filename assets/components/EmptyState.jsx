// --- EmptyState.jsx ---------------
import { FaFileInvoiceDollar } from 'react-icons/fa';

export default function EmptyState({ t }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <FaFileInvoiceDollar
        size={48}
        style={{ color: t.textMuted, marginBottom: 16, opacity: 0.4 }}
      />
      <p
        style={{
          color: t.textMuted,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 14,
        }}
      >
        Nenhum boleto encontrado
      </p>
    </div>
  );
}
