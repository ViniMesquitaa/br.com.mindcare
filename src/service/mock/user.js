import AxiosMockAdapter from "axios-mock-adapter";
import { api } from "../http";
import { ENDPOINTS } from "../http/endpoints";

const MOCK_USERS = [
  {
    id: "1",
    nome: "Carlos Eduardo Almeida",
    email: "carlos.almeida@email.com",
    senha: "senha123",
    tipoUsuario: "1", // ADMIN_MASTER
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "2",
    nome: "Ana Carolina Souza",
    email: "ana.souza@email.com",
    senha: "senha123",
    tipoUsuario: "2", // ADMIN
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "3",
    nome: "João Vitor Oliveira",
    email: "joao.oliveira@email.com",
    senha: "senha123",
    tipoUsuario: "3", // PATIENT
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "4",
    nome: "Maria Luiza Santos",
    email: "maria.santos@email.com",
    senha: "senha123",
    tipoUsuario: "4", // PROFESSIONAL
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "5",
    nome: "Ricardo Almeida Costa",
    email: "ricardo.costa@email.com",
    senha: "senha123",
    tipoUsuario: "1", // ADMIN_MASTER
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "6",
    nome: "Juliana Pereira Lima",
    email: "juliana.lima@email.com",
    senha: "senha123",
    tipoUsuario: "2", // ADMIN
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "7",
    nome: "Felipe Martins da Silva",
    email: "felipe.silva@email.com",
    senha: "senha123",
    tipoUsuario: "3", // PATIENT
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
  {
    id: "8",
    nome: "Luciana Ramos Costa",
    email: "luciana.costa@email.com",
    senha: "senha123",
    tipoUsuario: "4", // PROFESSIONAL
    foto: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    status: "1",
  },
];

const generateMockToken = (user) => {
  return `mocked-token-${user.id}`;
};

export const mockUserService = (delayResponse) => {
  const mock = new AxiosMockAdapter(api, { delayResponse });

  mock
    .onPost(ENDPOINTS.login)
    .reply((config) => {
      const { email, senha } = JSON.parse(config.data);
      const user = MOCK_USERS.find(
        (u) => u.email === email && u.senha === senha
      );

      if (user) {
        return [
          200,
          {
            token: generateMockToken(user),
            user: {
              id: user.id,
              nome: user.nome,
              email: user.email,
              tipoUsuario: user.tipoUsuario,
              foto: user?.foto,
              status: user?.status,
            },
          },
        ];
      }

      return [401, { message: "Credenciais inválidas" }];
    })
    .onAny()
    .passThrough();
};
