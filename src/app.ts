import Fastify from 'fastify';
import { userRoutes } from './modules/users/users.route';

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get('/', async () => {
    return {
      message: 'Welcome to Fastify API!',
    };
  });

  app.register(userRoutes, {
    prefix: '/api/users',
  });

  return app;
}
