import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";
import userController from "../controllers/userController";

const UserRoutes = Router();

UserRoutes.get("/getUser", userController.getUsers);
UserRoutes.post("/createUser", userController.signUp);
UserRoutes.post("/logIn", userController.logIn);

export default UserRoutes;
