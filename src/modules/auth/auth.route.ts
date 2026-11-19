import type { FastifyInstance } from "fastify";
import { UserController } from "./user.controller.js";

export async function userRoutes(app: FastifyInstance) {
  const userController = new UserController();

  app.get("/", userController.getUsers.bind(userController));

  app.get("/:id", userController.getUserById.bind(userController));
}
