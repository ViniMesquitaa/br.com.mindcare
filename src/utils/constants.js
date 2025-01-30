export const USER_TYPES = {
  admin: [
    {
      id: 1,
      label: "Administrador Master",
      value: "ADMIN_MASTER",
    },
    {
      id: 2,
      label: "Administrador",
      value: "ADMIN",
    },
  ],
  common: [
    {
      id: 3,
      label: "Paciente",
      value: "PATIENT",
    },
    {
      id: 4,
      label: "Profissional",
      value: "PROFESSIONAL",
    },
  ],
};

export const MOCK_USERS = [
  {
    id: "1",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Carlos Eduardo Almeida",
    status: "1",
    tipoUsuario: "1", // ADMIN_MASTER
  },
  {
    id: "2",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Ana Carolina Souza",
    status: "1",
    tipoUsuario: "2", // ADMIN
  },

  {
    id: "3",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "João Vitor Oliveira",
    status: "1",
    tipoUsuario: "3", // PATIENT
  },
  {
    id: "4",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Maria Luiza Santos",
    status: "1",
    tipoUsuario: "4", // PROFESSIONAL
  },
  {
    id: "5",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Ricardo Almeida Costa",
    status: "1",
    tipoUsuario: "1", // ADMIN_MASTER
  },
  {
    id: "6",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Juliana Pereira Lima",
    status: "1",
    tipoUsuario: "2", // ADMIN
  },

  {
    id: "7",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Felipe Martins da Silva",
    status: "1",
    tipoUsuario: "3", // PATIENT
  },
  {
    id: "8",
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    nome: "Luciana Ramos Costa",
    status: "1",
    tipoUsuario: "4", // PROFESSIONAL
  },
];
