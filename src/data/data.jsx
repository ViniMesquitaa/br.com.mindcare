import { Circle, UserRoundSearch } from "lucide-react";

export const COLUMNS_ADMINISTRADORES = [
  { name: "id", label: "ID" },
  { name: "name", label: "Nome" },
  { name: "createdAt", label: "Data de Cadastro" },
  { name: "status", label: "Status" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_ADMINISTRADORES = [
  {
    id: "1",
    name: "Carlos Almeida",
    status: "Ativo",
    createdAt: "2025-01-01",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: "2",
    name: "Ana Beatriz",
    status: "Ativo",
    createdAt: "2025-01-02",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: "3",
    name: "João Silva",
    status: "Ativo",
    createdAt: "2025-01-03",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: "4",
    name: "Maria Oliveira",
    status: "Ativo",
    createdAt: "2025-01-04",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: "5",
    name: "Pedro Henrique",
    status: "Ativo",
    createdAt: "2025-01-05",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
];

export const COLUMNS_PATIENTS = [
  { name: "id", label: "ID" },
  { name: "name", label: "Nome" },
  { name: "dateBirth", label: "Data de nascimento" },
  { name: "medicalRecords", label: "Prontuário" },
  { name: "status", label: "Status" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_PATIENTS = [
  {
    id: 1,
    name: "João da Silva",
    dateBirth: "1990-05-14",
    medicalRecords: "123456",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    dateBirth: "1985-03-22",
    medicalRecords: "789101",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 3,
    name: "Carlos Santos",
    dateBirth: "1978-11-30",
    medicalRecords: "112131",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 4,
    name: "Ana Souza",
    dateBirth: "2000-07-09",
    medicalRecords: "415161",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 5,
    name: "Pedro Ferreira",
    dateBirth: "1995-12-18",
    medicalRecords: "718192",
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
];

export const COLUMNS_PROFISSIONAIS = [
  { name: "id", label: "ID" },
  { name: "name", label: "Nome" },
  { name: "specialty", label: "Especialidade" },
  { name: "quantityFree", label: "Quant. Gratuitas" },
  { name: "status", label: "Status" },
  { name: "details", label: "Detalhes" },
];

export const ROWS_PROFISSIONAIS = [
  {
    id: 1,
    name: "Dr. João Mendes",
    specialty: "Cardiologia",
    quantityFree: 15,
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 2,
    name: "Dra. Maria Clara",
    specialty: "Pediatria",
    quantityFree: 3,
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 3,
    name: "Dr. Carlos Eduardo",
    specialty: "Ortopedia",
    quantityFree: 8,
    status: "Inativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 4,
    name: "Dra. Ana Luiza",
    specialty: "Dermatologia",
    quantityFree: 5,
    status: "Ativo",
    details: <UserRoundSearch color="#d2e0ee" />,
  },
  {
    id: 5,
    name: "Dr. Pedro Henrique",
    specialty: "Psiquiatria",
    quantityFree: 9,
    status: (
      <span style={{ color: "green" }}>
        <Circle strokeWidth={0} fill="green" size="10" /> Aprovado
      </span>
    ),
    details: <UserRoundSearch color="#d2e0ee" />,
  },
];
