import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";

container.registerSingleton("UserServices", UserServices);
const userControolers = container.resolve(UserControllers);

export const userRouter = Router();

