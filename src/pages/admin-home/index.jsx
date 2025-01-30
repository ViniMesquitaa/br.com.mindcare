import React from "react";
import { useState } from "react";
import Table from "../../components/Table";
import TableSearch from "../../components/table-search";
import { COLUMNS_ADMINISTRADORES, ROWS_ADMINISTRADORES } from "../../data/data";
import "./styles.css";

export default function AdminHomePage() {
  const [page, setPage] = useState(1);

  const columns = COLUMNS_ADMINISTRADORES;
  const rows = ROWS_ADMINISTRADORES;

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
