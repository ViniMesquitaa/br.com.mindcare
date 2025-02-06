import AxiosMockAdapter from "axios-mock-adapter";
import { api } from "../http";
import { ENDPOINTS } from "../http/endpoints";

const mockData = {
  professionals: [
    {
      id: "1",
      name: "Alice",
      specialty: "Psiquiatria",
      quantityFree: 14,
      status: {
        id: 1,
        description: "Aprovado",
        enum: "APROVADO",
      },
    },
    {
      id: "2",
      name: "Bob",
      specialty: "Cardiologia",
      quantityFree: 15,
      status: {
        id: 2,
        description: "Pendente",
        enum: "PENDENTE",
      },
    },
    {
      id: "3",
      name: "Carlos",
      specialty: "Ortopedia",
      quantityFree: 15,
      status: {
        id: 1,
        description: "Aprovado",
        enum: "APROVADO",
      },
    },
    {
      id: "4",
      name: "Diana",
      specialty: "Dermatologia",
      quantityFree: 15,
      status: {
        id: 3,
        description: "Rejeitado",
        enum: "REJEITADO",
      },
    },
    {
      id: "5",
      name: "Eva",
      specialty: "Neurologia",
      quantityFree: 15,
      status: {
        id: 1,
        description: "Aprovado",
        enum: "APROVADO",
      },
    },
  ],
  patients: [
    {
      id: 1,
      name: "Alice",
      dateOfBirth: "21/09/2000",
      medicalRecord: "1234567890",
      status: {
        id: 1,
        description: "Ativo",
        enum: "ATIVO",
      },
    },
    {
      id: 2,
      name: "Bob",
      dateOfBirth: "15/06/1995",
      medicalRecord: "2345678901",
      status: {
        id: 2,
        description: "Inativo",
        enum: "Inativo",
      },
    },
    {
      id: 3,
      name: "Carlos",
      dateOfBirth: "10/12/1988",
      medicalRecord: "3456789012",
      status: {
        id: 1,
        description: "Ativo",
        enum: "ATIVO",
      },
    },
    {
      id: 4,
      name: "Diana",
      dateOfBirth: "05/03/1990",
      medicalRecord: "4567890123",
      status: {
        id: 2,
        description: "Inativo",
        enum: "Inativo",
      },
    },
    {
      id: 5,
      name: "Eva",
      dateOfBirth: "17/07/2002",
      medicalRecord: "5678901234",
      status: {
        id: 1,
        description: "Ativo",
        enum: "ATIVO",
      },
    },
  ],
};

export const mockAdminService = (delayResponse) => {
  const mock = new AxiosMockAdapter(api, { delayResponse });

  mock
    .onGet(ENDPOINTS.getIndicators)
    .reply(200, [
      { id: 1, quantity: 300, title: "Profissionais cadastrados" },
      { id: 2, quantity: 300, title: "Profissionais logados" },
      { id: 3, quantity: 300, title: "Pacientes cadastrados" },
      { id: 4, quantity: 300, title: "Registros ativos" },
    ])
    .onGet(ENDPOINTS.getLatest)
    .reply(200, mockData)
    .onAny()
    .passThrough();
};
