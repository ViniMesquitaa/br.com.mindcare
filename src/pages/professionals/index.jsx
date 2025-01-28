import React from "react";
import { useState } from "react";
import Table from "../../components/Table";
import { Circle, UserRoundSearch } from "lucide-react";
import "./styles.css";

export default function ProfessionalPage() {
  const [page, setPage] = useState(1);

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

  const COLUMNS_ADMINISTADROS = [
    { name: "id", label: "ID" },
    { name: "name", label: "Nome" },
    { name: "createdAt", label: "Data de Cadastro" },
    { name: "details", label: "Detalhes" },
  ];

  const ROWS_ADMINISTRADORES = [
    {
      id: "1",
      name: "Carlos Almeida",
      createdAt: "2025-01-01",
      details: <UserRoundSearch color="#d2e0ee" />,
    },
    {
      id: "2",
      name: "Ana Beatriz",
      createdAt: "2025-01-02",
      details: <UserRoundSearch color="#d2e0ee" />,
    },
    {
      id: "3",
      name: "João Silva",
      createdAt: "2025-01-03",
      details: <UserRoundSearch color="#d2e0ee" />,
    },
    {
      id: "4",
      name: "Maria Oliveira",
      createdAt: "2025-01-04",
      details: <UserRoundSearch color="#d2e0ee" />,
    },
    {
      id: "5",
      name: "Pedro Henrique",
      createdAt: "2025-01-05",
      details: <UserRoundSearch color="#d2e0ee" />,
    },
  ];

  const featuredCards = [
    { id: 1, quantity: 300, title: "Profissionais cadastrados" },
    { id: 2, quantity: 300, title: "Profissionais logados" },
    { id: 3, quantity: 300, title: "Pacientes cadastrados" },
    { id: 4, quantity: 300, title: "Registros ativos" },
  ];

  return (
    <section className="professional-container">
      <section className="professional-title">
        <h2>Lista de profissionais cadastrados!</h2>
        <p>
          Aqui você pode visualizar todos os profissionais cadstrados no
          aplicativo MindCare
        </p>
      </section>

      {/*
        <section className="tables">
          <section>
            <Table
              columns={COLUMNS_ADMINISTADROS}
              rows={ROWS_ADMINISTRADORES}
              page={page}
              size={10}
              totalItems={100}
            />
          </section>

          <section>
            <Table
              columns={COLUMNS_ADMINISTADROS}
              rows={ROWS_ADMINISTRADORES}
              page={page}
              size={10}
              totalItems={100}
            />
          </section>
        </section> */}
    </section>
  );
}
