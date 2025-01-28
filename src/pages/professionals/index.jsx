import React from "react";
import { useState } from "react";
import Table from "../../components/Table";
import TableSearch from "../../components/table-search";
import { COLUMNS_PROFISSIONAIS, ROWS_PROFISSIONAIS } from "../../data/data";
import "./styles.css";

export default function ProfessionalPage() {
  const [page, setPage] = useState(1);

  const columns = COLUMNS_PROFISSIONAIS;
  const rows = ROWS_PROFISSIONAIS;

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="professional-container">
      <section className="professional-title">
        <h2>Lista de profissionais cadastrados!</h2>
        <p>
          Aqui você pode visualizar todos os profissionais cadstrados no
          aplicativo MindCare
        </p>
      </section>

      <section className="professional-table">
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
