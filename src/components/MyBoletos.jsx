

// src/components/MyBoletos.jsx
import React from 'react';
import BoletoCard from './BoletoCard.jsx'; // Importação relativa dentro da mesma pasta

const MyBoletos = () => {
  const handleVerComprovante = (nomeBoleto) => {
    alert(`Ver comprovante de: ${nomeBoleto}`);
    // Lógica para abrir o comprovante
  };

  const handleVerPdf = (nomeBoleto) => {
    alert(`Ver PDF de: ${nomeBoleto}`);
    // Lógica para abrir o PDF
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Meus Boletos</h1>

      <BoletoCard
        nome="Mensalidade Academia"
        status="Pago"
        onVerComprovante={() => handleVerComprovante('Mensalidade Academia')}
        onVerPdf={() => handleVerPdf('Mensalidade Academia')}
      />

      <BoletoCard
        nome="Conta de Luz - Junho"
        status="Pendente"
        onVerComprovante={() => handleVerComprovante('Conta de Luz - Junho')} // Este botão não aparecerá
        onVerPdf={() => handleVerPdf('Conta de Luz - Junho')}
      />

      <BoletoCard
        nome="Internet - Julho"
        status="Pago"
        onVerComprovante={() => handleVerComprovante('Internet - Julho')}
        onVerPdf={() => handleVerPdf('Internet - Julho')}
      />
    </div>
  );
};

export default MyBoletos;

