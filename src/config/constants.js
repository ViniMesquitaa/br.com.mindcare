export const TIME_TO_REDIRECT = 2000;

export const AXIOS_MOCK_ADAPTER_DELAY_RESPONSE = 2000;

export const LOCAL_STORAGE = {
  TOKEN: "mindcare_token",
  USER: "mindcare_user",
};

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

export const DEFAULT_VALUES = {
  id: "1",
  photo:
    "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
  fullName: "Pedro Lucas Silva Mesquita",
  cpf: "047.487.553-93",
  birthDate: "21/09/2000",
  phone: "(85) 99976-6539",
  email: "pedrolucas0921@gmail.com",
  cep: "60714-070",
  street: "Rua Thomas Edison",
  neighborhood: "Itaperi",
  city: "Fortaleza",
  state: "CE",
  houseNumber: "1000",
  complement: "Ap 305 Bl 1",
  password: "we01yr8u",
  confirmPassword: "we01yr8u",
  userType: "1",
  status: "2",
};
