import React from "react";
import { useState } from "react";
import Table from "../../components/Table";
import TableSearch from "../../components/table-search";
import { COLUMNS_PATIENTS, ROWS_PATIENTS } from "../../data/data";
import "./styles.css";

export default function PatientPage() {
  const [page, setPage] = useState(1);

  const columns = COLUMNS_PATIENTS;
  const rows = ROWS_PATIENTS;

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

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
        <TableSearch columns={columns} />
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
