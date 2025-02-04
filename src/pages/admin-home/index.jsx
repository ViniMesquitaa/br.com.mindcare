import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { COLUMNS_ADMINISTRADORES, ROWS_ADMINISTRADORES } from "../../data/data";

import "./styles.css";

export default function AdminHomePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState({
    name: "",
    birthDate: "",
    email: "",
    record: "",
    diagnosis: "",
    status: "",
  });

  const columns = COLUMNS_ADMINISTRADORES;
  const rows = ROWS_ADMINISTRADORES;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filtered data:", filterData);
  };

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="admin-home-container">
      <section className="admin-home-title">
        <h2>Lista de administradores cadastrados</h2>
        <p>
          Aqui você pode visualizar todos os administradores cadstrados no
          aplicativo MindCare
        </p>
      </section>

      <section className="admin-home-table">
        <form onSubmit={handleSubmit} className="search-pacient-filter">
          <div className="search-pacient-filter_group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={filterData.name}
              onChange={handleChange}
            />
          </div>

          <div className="search-pacient-filter_group">
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={filterData.birthDate}
              onChange={handleChange}
            />
          </div>

          <div className="search-pacient-filter_group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={filterData.email}
              onChange={handleChange}
            />
          </div>

          <div className="search-pacient-filter_group">
            <label htmlFor="record">Prontuário</label>
            <input
              type="text"
              id="record"
              name="record"
              value={filterData.record}
              onChange={handleChange}
            />
          </div>

          <div className="search-pacient-filter_group">
            <label htmlFor="diagnosis">Diagnóstico</label>
            <input
              type="text"
              id="diagnosis"
              name="diagnosis"
              value={filterData.diagnosis}
              onChange={handleChange}
            />
          </div>

          <div className="search-pacient-filter_group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={filterData.status}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>

          <button type="submit" className="search-pacient-submit_button">
            Buscar
          </button>
        </form>
        <Table
          columns={columns}
          rows={rows}
          page={page}
          size={10}
          totalItems={100}
          onPaginate={page}
        />
      </section>
    </section>
  );
}
