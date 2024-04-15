import { inject, injectable } from "tsyringe";
import { UserServices } from "../services/user.services";

@injectable()
export class UserControllers{

    constructor(@inject("UserServices") private userServices: UserServices) {}

    
}