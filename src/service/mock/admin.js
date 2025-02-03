import AxiosMockAdapter from "axios-mock-adapter";
import { api } from "../http";
import { ENDPOINTS } from "../http/endpoints";

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
    .onAny()
    .passThrough();
};
