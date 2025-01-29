import React, { useEffect } from "react";
import { useState } from "react";
import Table from "../../components/Table";
import TableSearch from "../../components/table-search";
import {
  COLUMNS_PATIENTS as columns,
  ROWS_PATIENTS as rows,
} from "../../data/data";
import "./styles.css";

export default function PatientPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(rows);
  const [originalData] = useState(rows);
  const [search, setSearch] = useState({
    id: "",
    name: "",
    dateBirth: "",
    medicalRecords: "",
    status: "",
  });

  useEffect(() => {
    const filteredData = originalData.filter((row) =>
      Object.entries(search).every(([key, value]) =>
        value
          ? row[key]?.toString().toLowerCase().includes(value.toLowerCase())
          : true
      )
    );
    setData(filteredData);
  }, [search, originalData]);

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

  function handleInputChange(e, column) {
    const value = e.target.value;
    setSearch((prev) => ({ ...prev, [column]: value }));
  }

  return (
    <section className="patient-container">
      <section className="patient-title">
        <h2>Lista de pacientes cadastrados</h2>
        <p>
          Aqui você pode visualizar todos os pacientes cadstrados no aplicativo
          MindCare
        </p>
      </section>

      <section className="patient-table">
        <form
          // onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={search.id}
              onChange={(e) => handleInputChange(e, "id")}
            />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={search.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>

          <div>
            <label htmlFor="registrationDate">Data de Cadastro</label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              // onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="userType">Prontuário</label>
            <input
              type="text"
              id="medicalRecords"
              name="medicalRecords"
              onChange={(e) => handleInputChange(e, "medicalRecords")}
            />
          </div>

          <div>
            <label htmlFor="status">Status</label>{" "}
            <select
              id="status"
              name="status"
              value={search.status}
              onChange={(e) => handleInputChange(e, "status")}
            >
              <option value="">Todos</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>

          <button type="submit" style={{ backgroundColor: "black" }}>
            Salvar
          </button>
        </form>

        <Table
          columns={columns}
          rows={data}
          page={page}
          size={10}
          totalItems={data.length}
          onPaginate={handlePaginate}
        />
      </section>
    </section>
  );
}
