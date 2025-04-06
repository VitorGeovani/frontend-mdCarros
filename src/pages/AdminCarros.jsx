import React, { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";
import "./styles/AdminCarros.scss";

const AdminCarros = () => {
  const [carros, setCarros] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    marca: "",
    modelo: "",
    ano: "",
    quilometragem: "",
    preco: "",
    categoria_id: ""
  });
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchCarros();
    fetchCategorias();
  }, []);

  const fetchCarros = async () => {
    try {
      const response = await api.get("/api/carros");
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await api.get("/api/categorias");
      setCategorias(response.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await api.put(`/api/carros/${formData.id}`, formData);
      } else {
        await api.post("/api/carros", formData);
      }
      setFormData({ id: null, marca: "", modelo: "", ano: "", quilometragem: "", preco: "", categoria_id: "" });
      fetchCarros();
    } catch (error) {
      console.error("Erro ao salvar carro:", error);
    }
  };

  const handleEdit = (carro) => {
    setFormData(carro);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/carros/${id}`);
      fetchCarros();
    } catch (error) {
      console.error("Erro ao deletar carro:", error);
    }
  };

  return (
    <div className="admin-carros">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Gerenciar Carros</motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="formulario-carro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input type="text" name="marca" placeholder="Marca" value={formData.marca} onChange={handleChange} required />
        <input type="text" name="modelo" placeholder="Modelo" value={formData.modelo} onChange={handleChange} required />
        <input type="number" name="ano" placeholder="Ano" value={formData.ano} onChange={handleChange} required />
        <input type="number" name="quilometragem" placeholder="Quilometragem" value={formData.quilometragem} onChange={handleChange} required />
        <input type="number" name="preco" placeholder="Preço" value={formData.preco} onChange={handleChange} required />

        <select name="categoria_id" value={formData.categoria_id} onChange={handleChange} required>
          <option value="">Selecione uma categoria</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.nome}</option>
          ))}
        </select>

        <button type="submit">{formData.id ? "Atualizar" : "Cadastrar"}</button>
      </motion.form>

      <motion.table
        className="tabela-carros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>KM</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro) => (
            <motion.tr
              key={carro.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <td>{carro.id}</td>
              <td>{carro.marca}</td>
              <td>{carro.modelo}</td>
              <td>{carro.ano}</td>
              <td>{carro.quilometragem}</td>
              <td>{carro.preco}</td>
              <td>{carro.categoria?.nome || "-"}</td>
              <td>
                <button onClick={() => handleEdit(carro)}>Editar</button>
                <button onClick={() => handleDelete(carro.id)}>Excluir</button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default AdminCarros;
