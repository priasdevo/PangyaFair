export interface IApiContext {
  sendRequest: (method: string, body: {}, url: string) => {};
  setToken: (token: string) => void;
  token: string;
}
