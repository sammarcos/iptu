// --- BoletoCard.jsx ---------------
import { FaBarcode, FaReceipt, FaEye } from 'react-icons/fa';
import NeonBadge from './NeonBadge.jsx';
import InfoRow from './InfoRow.jsx';
import ActionButton from './ActionButton.jsx';
import { fmt, fmtDate } from '../utils/helpers.js';

export default function BoletoCard({ b, t }) {
  const pago = b.status === 'pago';
  return (
    <div
      style={{
        background: t.bgCard,
        border: `1px solid ${pago ? t.paid : t.unpaid}`,
        borderRadius: 8,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        boxShadow: pago ? t.glowCard : `0 0 24px rgba(255,45,120,0.06)`,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = pago ? t.glow : t.glowPink;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = pago
          ? t.glowCard
          : `0 0 24px rgba(255,45,120,0.06)`;
      }}
    >
      {/* Decorative corner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 48,
          height: 48,
          borderLeft: `1px solid ${pago ? t.paid : t.unpaid}`,
          borderBottom: `1px solid ${pago ? t.paid : t.unpaid}`,
          opacity: 0.35,
          borderBottomLeftRadius: 8,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 4,
            }}
          >
            <FaBarcode size={13} style={{ color: t.textMuted }} />
            <span
              style={{
                fontSize: 11,
                color: t.textMuted,
                letterSpacing: 1.2,
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              {b.id}
            </span>
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 700,
              color: t.text,
              letterSpacing: 0.5,
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            {b.nome}
          </h3>
        </div>
        <NeonBadge pago={pago} t={t} />
      </div>

      {/* Info grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px 16px',
        }}
      >
        <InfoRow
          label="Parcela"
          value={`${b.parcela} / ${b.totalParcelas}`}
          t={t}
        />
        <InfoRow label="Vencimento" value={fmtDate(b.vencimento)} t={t} />
        <InfoRow
          label="Valor"
          value={fmt(b.valor)}
          t={t}
          highlight
          color={pago ? t.paid : t.unpaid}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, ${pago ? t.paid : t.unpaid}44, transparent)`,
        }}
      />

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <ActionButton
          icon={<FaEye size={11} />}
          label="Boleto"
          href={b.boletoUrl}
          disabled={!b.boletoUrl}
          t={t}
        />
        <ActionButton
          icon={<FaReceipt size={11} />}
          label="Comprovante"
          href={b.comprovanteUrl}
          disabled={!b.comprovanteUrl || !pago}
          t={t}
          pink
        />
      </div>
    </div>
  );
}
