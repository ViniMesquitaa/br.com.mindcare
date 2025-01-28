import { Circle, UserRoundSearch } from "lucide-react";

export const COLUMNS_ADMINISTRADORES = [
  { name: "id", label: "ID" },
  { name: "name", label: "Nome" },
  { name: "createdAt", label: "Data de Cadastro" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_ADMINISTRADORES = [
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

export const COLUMNS_PACIENTE = [
  { name: "name", label: "Nome" },
  { name: "dateBirth", label: "Data de nascimento" },
  { name: "medicalRecords", label: "Prontuário" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_PACIENTE = [
  {
    name: "João da Silva",
    dateBirth: "1990-05-14",
    medicalRecords: "123456",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Maria Oliveira",
    dateBirth: "1985-03-22",
    medicalRecords: "789101",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Carlos Santos",
    dateBirth: "1978-11-30",
    medicalRecords: "112131",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Ana Souza",
    dateBirth: "2000-07-09",
    medicalRecords: "415161",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Pedro Ferreira",
    dateBirth: "1995-12-18",
    medicalRecords: "718192",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
];

export const COLUMNS_PROFISSIONAIS = [
  { name: "name", label: "Nome" },
  { name: "specialty", label: "Nome" },
  { name: "status", label: "Status" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_PROFISSIONAIS = [
  {
    name: "Dr. João Mendes",
    specialty: "Cardiologia",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Dra. Maria Clara",
    specialty: "Pediatria",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Dr. Carlos Eduardo",
    specialty: "Ortopedia",
    status: "Inativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Dra. Ana Luiza",
    specialty: "Dermatologia",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    name: "Dr. Pedro Henrique",
    specialty: "Psiquiatria",
    status: (
      <span style={{ color: "green" }}>
        <Circle strokeWidth={0} fill="green" size="10" /> Aprovado
      </span>
    ),
    details: <UserRoundSearch color="#d2e0ee" />,
  },
];
