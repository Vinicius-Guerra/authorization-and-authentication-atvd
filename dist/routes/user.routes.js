"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const user_services_1 = require("../services/user.services");
const user_controllers_1 = require("../controllers/user.controllers");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const isEmailAlreadyRegistered_middleware_1 = require("../middlewares/isEmailAlreadyRegistered.middleware");
tsyringe_1.container.registerSingleton("UserServices", user_services_1.UserServices);
const userControllers = tsyringe_1.container.resolve(user_controllers_1.UserControllers);
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", isEmailAlreadyRegistered_middleware_1.IsEmailAlreadyRegistered.execute, (req, res) => userControllers.register(req, res));
exports.userRouter.post("/login", (req, res) => userControllers.login(req, res));
exports.userRouter.get("/", verifyToken_middleware_1.VerifyToken.execute, (req, res) => userControllers.getUser(req, res));
