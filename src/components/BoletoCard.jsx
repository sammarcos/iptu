

// src/components/BoletoCard.jsx
import React from 'react';
import { FaFileInvoiceDollar, FaCheckCircle, FaExclamationCircle, FaEye, FaRegFilePdf } from 'react-icons/fa';

const BoletoCard = ({ nome, status, onVerComprovante, onVerPdf }) => {
  const isPaid = status === 'Pago';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4 max-w-sm mx-auto">
      {/* Ícone de Boleto */}
      <div className="flex-shrink-0 mr-4">
        <FaFileInvoiceDollar className="text-blue-500 text-3xl" />
      </div>

      {/* Nome e Status */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{nome}</h3>
        <div className={`flex items-center mt-1 text-sm ${isPaid ? 'text-green-600' : 'text-yellow-600'}`}>
          {isPaid ? (
            <FaCheckCircle className="mr-1" />
          ) : (
            <FaExclamationCircle className="mr-1" />
          )}
          <span>{status}</span>
        </div>
      </div>

      {/* Ícones de Ação */}
      <div className="flex items-center space-x-3 ml-4">
        {isPaid && (
          <button
            onClick={onVerComprovante}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            title="Ver Comprovante"
          >
            <FaEye className="text-xl" />
          </button>
        )}
        <button
          onClick={onVerPdf}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          title="Ver PDF do Boleto"
        >
          <FaRegFilePdf className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default BoletoCard;

