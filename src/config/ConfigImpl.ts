export interface ConfigImpl {
  ENV: string;
  PORT: number;

  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}
