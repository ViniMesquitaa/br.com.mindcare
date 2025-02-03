import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table";
import { COLUMNS_ADMINISTRADORES, ROWS_ADMINISTRADORES } from "../../data/data";
import { useSession } from "../../hooks/useSession";
import { getIndicators } from "../../service/http/admin";
import { Loading } from "../../components/Loading";

import "./styles.css";
import { useToastContext } from "../../context/ToastProvider";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const {
    session: { user },
  } = useSession();
  const [loading, setLoading] = useState(true);
  const [indicators, setIndicators] = useState([]);
  const { addToast } = useToastContext();

  useEffect(() => {
    const fetchIndicators = async () => {
      try {
        const data = await getIndicators();
        setIndicators(data);
      } catch (error) {
        addToast({
          title: "Error",
          type: "error",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchIndicators();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="admin-container">
          <section className="admin-title">
            <p>Olá {user?.nome}</p>
            <p>Seja bem vindo(a) ao painel de controle.</p>
          </section>

          <section>
            <section className="featured">
              {indicators.map((featured) => (
                <section key={featured.id} className="featured-box">
                  <h2>{featured.quantity}</h2>
                  <p>{featured.title}</p>
                </section>
              ))}
            </section>

            <section className="tables">
              <section>
                <div className="header_table">
                  <div className="title-container">
                    <span className="title_table">Dados dos Profissionais</span>
                    <span className="sub-title_table">(recentes)</span>
                  </div>
                  <Link href="#">
                    <span className="see-more">Ver mais</span>
                  </Link>
                </div>
                <Table
                  columns={COLUMNS_ADMINISTRADORES}
                  rows={ROWS_ADMINISTRADORES}
                />
              </section>

              <section>
                <div className="header_table">
                  <div className="title-container">
                    <span className="title_table">Dados dos Pacientes</span>
                    <span className="sub-title_table">(recentes)</span>
                  </div>
                  <Link href="#">
                    <span className="see-more">Ver mais</span>
                  </Link>
                </div>
                <Table
                  columns={COLUMNS_ADMINISTRADORES}
                  rows={ROWS_ADMINISTRADORES}
                />
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
