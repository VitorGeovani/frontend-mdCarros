import React from 'react';
import './styles/AdminDashboard.scss';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Painel Administrativo</h2>
      <p>Aqui você pode gerenciar os veículos cadastrados.</p>
      {/* Funcionalidades futuras: listagem, edição e exclusão de veículos */}
    </div>
  );
}

export default AdminDashboard;