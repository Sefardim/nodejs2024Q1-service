import { registerAs } from '@nestjs/config';

const server = registerAs('server', () => ({
  port: process.env.PORT || 3000,
}));

export { server };
