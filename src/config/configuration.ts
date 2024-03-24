import { registerAs } from '@nestjs/config';

const server = registerAs('server', () => ({
  port: process.env.PORT || 3000,
}));

const postgres = registerAs('postgres', () => ({
  port: process.env.POSTGRES_PORT || 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  dataBase: process.env.POSTGRES_DATABASE || 'rs-school',
}));

export { server, postgres };
