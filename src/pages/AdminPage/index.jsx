import { Circle, UserRoundSearch } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import Table from "../../components/Table";
import { useToastContext } from "../../context/ToastProvider";
import { useSession } from "../../hooks/useSession";
import { getIndicators, getLatest } from "../../service/http/admin";
import { getFirstAndSecondName } from "../../utils/getFirstAndSecondName";

import "./styles.css";

export default function AdminPage() {
  const {
    session: { user },
  } = useSession();
  const [loading, setLoading] = useState(true);
  const [indicators, setIndicators] = useState([]);
  const [lastRegisteredUsers, setLastRegisteredUsers] = useState([]);
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

    const fetchLastRegisteredUsers = async () => {
      try {
        const data = await getLatest();
        setLastRegisteredUsers(data);
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
    fetchLastRegisteredUsers();
  }, [addToast]);

  const COLUMNS_PROFISSIONAIS = [
    { name: "id", label: "ID" },
    { name: "name", label: "Nome" },
    { name: "specialty", label: "Especialidade" },
    { name: "quantityFree", label: "Quant. Gratuitas" },
    { name: "status", label: "Status" },
    { name: "details", label: "Detalhes" },
  ];

  const COLUMNS_PATIENTS = [
    { name: "id", label: "ID" },
    { name: "name", label: "Nome" },
    { name: "dateBirth", label: "Data de nascimento" },
    { name: "medicalRecords", label: "Prontuário" },
    { name: "status", label: "Status" },
    { name: "details", label: "Detalhes" },
  ];

  const [PROFESSIONAL_ROWS, PATIENT_ROWS] = useMemo(() => {
    const PROFESSIONAL_ROWS =
      lastRegisteredUsers?.professionals?.map((data) => ({
        id: data?.id,
        name: getFirstAndSecondName(data?.name),
        specialty: data?.specialty,
        quantityFree: data?.quantityFree,
        status: (
          <span
            className={`search-pacient-status ${
              data?.status?.description === "Aprovado" ? "active" : "inactive"
            }`}
          >
            <Circle
              strokeWidth={0}
              fill={data?.status?.description === "Aprovado" ? "green" : "red"}
              size="10"
            />
            {data?.status?.description}
          </span>
        ),
        details: <UserRoundSearch className="search-professionals-details" />,
      })) || [];

    const PATIENT_ROWS =
      lastRegisteredUsers?.patients?.map((data) => ({
        id: data?.id,
        name: getFirstAndSecondName(data?.name),
        dateBirth: data?.dateOfBirth,
        medicalRecords: data?.medicalRecord,
        status: (
          <span
            className={`search-pacient-status ${
              data?.status?.description === "Ativo" ? "active" : "inactive"
            }`}
          >
            <Circle
              strokeWidth={0}
              fill={data?.status?.description === "Ativo" ? "green" : "red"}
              size="10"
            />
            {data?.status?.description}
          </span>
        ),
        details: <UserRoundSearch className="search-pacient-details" />,
      })) || [];

    return [PROFESSIONAL_ROWS, PATIENT_ROWS];
  }, [lastRegisteredUsers, getFirstAndSecondName]);

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
                  columns={COLUMNS_PROFISSIONAIS}
                  rows={PROFESSIONAL_ROWS}
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
                <Table columns={COLUMNS_PATIENTS} rows={PATIENT_ROWS} />
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
