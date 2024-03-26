export interface IEnvironment {
  API_BASE_URL: string;
}

export const ENVIRONMENT: IEnvironment = {
  API_BASE_URL: import.meta.env.VITE_REACT_APP_API_BASE_URL || "",
};
