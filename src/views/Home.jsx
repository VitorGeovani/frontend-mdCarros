import React, { useEffect, useState } from 'react';
import CarroCard from '../components/CarroCard';
import './Home.scss';

const Home = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/carros')
      .then(res => res.json())
      .then(data => setCarros(data))
      .catch(err => console.error('Erro ao buscar carros:', err));
  }, []);

  return (
    <div className="home">
      <h1>Veículos disponíveis</h1>
      <div className="carros-lista">
        {carros.map(carro => (
          <CarroCard key={carro.id} carro={carro} />
        ))}
      </div>
    </div>
  );
};

export default Home;