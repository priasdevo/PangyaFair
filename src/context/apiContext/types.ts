export interface IApiContext {
  sendRequest: (method: string, body: {}, url: string, tags?: string[]) => {};
  setToken: (token: string) => void;
  token: string;
}
