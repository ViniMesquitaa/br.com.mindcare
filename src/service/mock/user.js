import AxiosMockAdapter from "axios-mock-adapter";
import { api } from "../http";
import { ENDPOINTS } from "../http/endpoints";

export const mockPostsService = (delayResponse) => {
  const mock = new AxiosMockAdapter(api, { delayResponse });

  mock.onPost(ENDPOINTS.login).reply(200, {}).onAny().passThrough();
};
