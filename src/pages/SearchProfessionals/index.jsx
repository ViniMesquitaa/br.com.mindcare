import { Circle, UserRoundSearch } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { MOCK_USERS } from "../../config/constants";
import { generateDate } from "../../utils/generateBirthDate";

import "./styles.css";

const loggedUser = MOCK_USERS[2];

export function SearchProfessionals() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState({
    professionalRecord: "",
    name: "",
    phone: "",
    email: "",
    specialty: "",
    ageRange: "",
    freeSessionsCount: "",
  });

  const COLUMNS = [
    { name: "professionalRecord", label: "Registro Profissional" },
    { name: "name", label: "Nome" },
    { name: "phone", label: "Telefone" },
    { name: "email", label: "Email" },
    { name: "Specialty", label: "Especialidade" },
    { name: "ageRange", label: "Faixa Etária" },
    { name: "freeSessionsCount", label: "Qtd. Atend. Grat." },
    { name: "details", label: "Detalhes" },
  ];

  const mock = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    professionalRecord: index + 1,
    phone: `(00) 00000-000${index}`,
    name: `Jonh Doe ${index + 1}`,
    email: `user${index + 1}@example.com`,
    specialty: `Specialty ${index}`,
    ageRange: "Adulto",
    freeSessionsCount: 100,
  }));

  const ROWS = useMemo(() => {
    return (
      mock?.map((professional) => ({
        professionalRecord: professional?.professionalRecord,
        name: professional?.name,
        phone: professional?.phone,
        email: professional?.email,
        Specialty: professional?.specialty,
        ageRange: professional?.ageRange,
        freeSessionsCount: professional?.freeSessionsCount,
        details: (
          <UserRoundSearch
            className="search-professionals-details"
            onClick={() => navigate(`/professional/${professional?.id}`)}
          />
        ),
      })) || []
    );
  }, [mock]);

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
    <div className="search_professionals_container">
      <span className="search-professionals-welcome_message">{`Olá, ${loggedUser?.nome}, como você está se sentindo hoje?`}</span>
      <div className="search-professionals-table_container">
        <form onSubmit={handleSubmit} className="search-professionals-filter">
          <div className="search-professionals-filter_group">
            <label htmlFor="name">Registro Profissional</label>
            <input
              type="text"
              id="professionalRecord"
              name="professionalRecord"
              value={filterData.professionalRecord}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={filterData.name}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="record">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={filterData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={filterData.email}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="diagnosis">Especialidade</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={filterData.specialty}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="ageRange">Faixa Etária</label>
            <select
              id="ageRange"
              name="status"
              value={filterData.ageRange}
              onChange={handleChange}
            >
              <option value="">Adulto</option>
              <option value="active">Adolescente</option>
              <option value="inactive">Idoso</option>
            </select>
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="freeSessionsCount">Qtd. Atend. Grat.</label>
            <input
              type="number"
              id="freeSessionsCount"
              name="freeSessionsCount"
              value={filterData.freeSessionsCount}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="search-professionals-submit_button">
            Buscar
          </button>
        </form>
        <Table
          columns={COLUMNS}
          rows={ROWS}
          page={page}
          size={10}
          totalItems={mock.length}
          onPaginate={handlePaginate}
        />
      </div>
    </div>
  );
}
