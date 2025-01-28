import React from "react";
import Table from "../../components/Table";
import { COLUMNS_ADMINISTRADORES, ROWS_ADMINISTRADORES } from "../../data/data";
import "./styles.css";

export default function AdminPage() {
  const featuredCards = [
    { id: 1, quantity: 300, title: "Profissionais cadastrados" },
    { id: 2, quantity: 300, title: "Profissionais logados" },
    { id: 3, quantity: 300, title: "Pacientes cadastrados" },
    { id: 4, quantity: 300, title: "Registros ativos" },
  ];

  return (
    <section className="admin-container">
      <section className="admin-title">
        <p>Olá John Doe!</p>
        <p>Seja bem vindo(a) ao painel de controle.</p>
      </section>

      <section>
        <section className="featured">
          {featuredCards.map((featured) => (
            <section key={featured.id} className="featured-box">
              <h2>{featured.quantity}</h2>
              <p>{featured.title}</p>
            </section>
          ))}
        </section>

        <section className="tables">
          <section>
            <Table
              columns={COLUMNS_ADMINISTRADORES}
              rows={ROWS_ADMINISTRADORES}
            />
          </section>

          <section>
            <Table
              columns={COLUMNS_ADMINISTRADORES}
              rows={ROWS_ADMINISTRADORES}
            />
          </section>
        </section>
      </section>
    </section>
  );
}
