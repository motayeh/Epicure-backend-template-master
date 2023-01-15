import { DishService } from "./../services/dish.service";
import { Request, Response } from "express";

export class DishesController {
  public static async getDish(req: Request, res: Response) {
    try {
      const service = new DishService();
      const param = req.body;
      const Dishes = await service.getDishes(param);
      return res.send(Dishes);
    } catch (error) {
      return res.send(error);
    }
  }
  public static async allDish(req: Request, res: Response) {
    try {
      const service = new DishService();
      const dishes = await service.allDishes();
      return res.send(dishes);
    } catch (error) {
      return res.send(error);
    }
  }

  //   public static async getChef(req: Request, res: Response) {
  //     try {
  //       const service = new ChefsService();
  //       const param = req.body;
  //       const chef = await service.getChef(param);
  //       return res.send(chef);
  //     } catch (error) {
  //       return res.send(error);
  //     }
  //   }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishService();
      const chef = await service.createDish(params);
      return res.status(200).send("Dish successfully created");
    } catch (error) {
      return res.send(error);
    }
  }

  //   public static async updateChef(req: Request, res: Response) {
  //     try {
  //       const params = req.body;
  //       const service = new ChefsService();
  //       const chef = await service.updateChef(params);
  //       return res.send(chef);
  //     } catch (error) {
  //       return res.send(error);
  //     }
  //   }
}
