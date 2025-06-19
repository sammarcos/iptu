

// App.jsx
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { FaFileInvoiceDollar, FaCheckCircle, FaExclamationCircle, FaEye, FaRegFilePdf } from 'react-icons/fa';
// import MyBoletos from "./src/components/MyBoletos.jsx";


const BoletoCard = ({ nome, status, onVerComprovante, onVerPdf, boleto, comprovante }) => {
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

const Boletos = () => {
  const [boletos, setBoletos] = useState([]); // Estado para armazenar os boletos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    // Função assíncrona para carregar os boletos
    const fetchBoletos = async () => {
      try {
        // Ajuste o caminho do arquivo JSON se ele estiver em outra pasta
        const response = await fetch('./src/boletos.json'); // Caminho relativo ao index.html ou ao servidor
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBoletos(data);
      } catch (e) {
        console.error("Erro ao carregar boletos:", e);
        setError("Não foi possível carregar os boletos.");
      } finally {
        setLoading(false);
      }
    };

    fetchBoletos(); // Chame a função de carregamento
  }, []); // O array vazio assegura que o efeito seja executado apenas uma vez, ao montar o componente

  const handleVerComprovante = (nomeBoleto, comprovante) => {
      
    alert(`Ver comprovante de: ${nomeBoleto}: ${comprovante}`);
    // Lógica para abrir o comprovante
  };

  const handleVerPdf = (nomeBoleto, boleto) => {
    alert(`Ver PDF de: ${nomeBoleto}: ${boleto}`);
    // Lógica para abrir o PDF
  };

  if (loading) {
    return <div className="text-center text-gray-700 text-lg">Carregando boletos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg">Erro: {error}</div>;
  }

  if (boletos.length === 0) {
    return <div className="text-center text-gray-500 text-lg">Nenhum boleto encontrado.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Meus Boletos</h1>
      {boletos.map((boleto) => (
        <BoletoCard
          key={boleto.id} // Chave única para cada item na lista (muito importante para React)
          nome={boleto.nome}
          status={boleto.status}
          onVerComprovante={() => handleVerComprovante(boleto.nome)}
          onVerPdf={() => handleVerPdf(boleto.nome)}
        />
      ))}
    </div>
  );
};

function App() {
   return( <>
      <Boletos />
   </> );
}

const appRoot = document.querySelector("app");
if( appRoot ) {
   createRoot( appRoot ).render( <App /> );
} else {
   console.error( "appRoot not found." );
}
    

