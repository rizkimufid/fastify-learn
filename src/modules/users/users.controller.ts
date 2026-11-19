import type { FastifyReply, FastifyRequest } from 'fastify';
import { UserService } from './users.service.js';

const userService = new UserService();

interface UserParams {
  id: string;
}

export class UserController {
  async getUsers(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const users = await userService.getUsers();

    return reply.status(200).send({
      success: true,
      data: users,
    });
  }
  async getUserById(
    request: FastifyRequest<{ Params: UserParams }>,
    reply: FastifyReply,
  ) {
    const { id } = request.params

    const users = await userService.getUsersById(id);

    return reply.status(200).send({
      success: true,
      data: users,
    });
  }
}
