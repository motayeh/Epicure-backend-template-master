import jwt from "jsonwebtoken";
import { error } from "console";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import mongoose, { Aggregate } from "mongoose";
import UserService from "../services/users.service";

export default class userController {
  public static async signUp(req: Request, res: Response) {
    try {
      const user = req.body;
      //const user = req.headers.authorization?.split(' ')[1];
      if (!user) {
        throw new Error("Authintication failed!");
      }

      const service = new UserService();
      const users = await service.createUser(user);
      res.status(200).send(users);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  public static async logIn(req: Request, res: Response) {
    try {
      const user = req.body;
      const service = new UserService();
      const userLogged = await service.logIn(user);
      if (userLogged == "wrong password" || userLogged == "User isn't found.") {
        return res.status(401).send("error");
      }
      return res.status(200).send(userLogged);
    } catch (error) {
      return res.status(401).send(error);
    }
  }
  public static async getUsers(req: Request, res: Response) {
    const service = new UserService();
    const restaurants = await service.getUser();
    return res.send(restaurants);
  }
}
