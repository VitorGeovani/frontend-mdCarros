import React, { useEffect, useState } from 'react';
import api from '../services/api';
import CarroCard from '../components/CarroCard';
import './styles/Carros.scss';

function Carros() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    async function fetchCarros() {
      const response = await api.get('/carros');
      setCarros(response.data);
    }
    fetchCarros();
  }, []);

  return (
    <div className="carros">
      <h2>Carros Disponíveis</h2>
      {carros.map(carro => (
        <CarroCard key={carro.id} carro={carro} />
      ))}
    </div>
  );
}

export default Carros;