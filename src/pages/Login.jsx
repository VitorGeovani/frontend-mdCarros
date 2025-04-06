import React, { useState } from 'react';
import api from '../services/api';
import './styles/Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/admin/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/admin';
    } catch (err) {
      setErro('Credenciais inválidas');
    }
  };

  return (
    <div className="login">
      <h2>Login Administrativo</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default Login;