import { Circle, UserRoundSearch } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { MOCK_USERS } from "../../utils/constants";
import { generateDate } from "../../utils/generateBirthDate";

import "./styles.css";

const loggedUser = MOCK_USERS[4];

export function SearchPatients() {
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

  const COLUMNS = [
    { name: "name", label: "Nome" },
    { name: "birthDate", label: "Data de nascimento" },
    { name: "email", label: "Email" },
    { name: "medicalRecords", label: "Prontuário" },
    { name: "diagnosis", label: "Diagnóstico" },
    { name: "status", label: "Status" },
    { name: "details", label: "Detalhes" },
  ];

  const mock = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    birthDate: generateDate(),
    name: `Jonh Doe ${index + 1}`,
    email: `user${index + 1}@example.com`,
    medicalRecords: `123456789${index + 1}`,
    diagnosis: `Diagnosis ${index + 1}`,
    status: index % 2 === 0 ? "Ativo" : "Inativo",
  }));

  const ROWS = useMemo(() => {
    return (
      mock?.map((pacient) => ({
        name: pacient?.name,
        birthDate: pacient?.birthDate,
        email: pacient?.email,
        medicalRecords: pacient?.medicalRecords,
        diagnosis: pacient?.diagnosis,
        status: (
          <span
            className={`search-professionals-status ${
              pacient?.status === "Ativo" ? "active" : "inactive"
            }`}
          >
            <Circle
              strokeWidth={0}
              fill={pacient?.status === "Ativo" ? "green" : "red"}
              size="10"
            />
            {pacient?.status}
          </span>
        ),
        details: (
          <UserRoundSearch
            className="search-professionals-details"
            onClick={() => navigate(`/pacient/${pacient?.id}`)}
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
      <span className="search-professionals-welcome_message">{`Olá, Seja bem-vindo(a), ${loggedUser?.nome}!`}</span>
      <div className="search-professionals-table_container">
        <form onSubmit={handleSubmit} className="search-professionals-filter">
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
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={filterData.birthDate}
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
            <label htmlFor="record">Prontuário</label>
            <input
              type="text"
              id="record"
              name="record"
              value={filterData.record}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
            <label htmlFor="diagnosis">Diagnóstico</label>
            <input
              type="text"
              id="diagnosis"
              name="diagnosis"
              value={filterData.diagnosis}
              onChange={handleChange}
            />
          </div>

          <div className="search-professionals-filter_group">
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
