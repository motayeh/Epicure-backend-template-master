import { response } from "express";
import Dish from "../db/models/dish";

export class DishDal {
  public async getDish(param: { [key: string]: string }) {
    const result = await Dish.aggregate([
      {
        $match: { ResturantName: `${param.ResturantName}` },
      },
      {
        $lookup: {
          from: "dishes",
          localField: "_id",
          foreignField: "dishes",
          as: "dishes",
        },
      },
    ]);
    return result;
  }
  public async allDishes() {
    const results = await Dish.aggregate([
      {
        $project: {
          _id: false,
        },
      },
    ]);
    return results;
  }
  public async createDish(dish: any) {
    dish = new Dish({
      ID: dish.ID,
      ResturantID: dish.ResturantID,
      ResturantName: dish.ResturantName,
      DishImage: dish.DishImage,
      DishName: dish.DishName,
      DishDescreption: dish.DishDescreption,
      FoodType: dish.FoodType,
      Meals: dish.Meals,
      Price: dish.Price,
      Sides: dish.Sides,
    });
    const response = await Dish.create(dish);
    const result = await Dish.find({ ID: response.ID }).updateMany({
      $push: { dish: response._id },
    });
    return response;
  }
}
