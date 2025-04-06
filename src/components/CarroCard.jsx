import React from 'react';
import './styles/CarroCard.scss';

const CarroCard = ({ carro }) => {
  return (
    <div className="carro-card">
      <img src={carro.imagens?.[0]?.url || '/placeholder.png'} alt={carro.modelo} />
      <h3>{carro.marca} {carro.modelo}</h3>
      <p>{carro.ano} - {carro.km} km</p>
      <p className="preco">R$ {Number(carro.preco).toLocaleString('pt-BR')}</p>
      <p>{carro.descricao}</p>
    </div>
  );
};

export default CarroCard;