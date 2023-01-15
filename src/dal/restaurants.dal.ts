import { Aggregate } from "mongoose";
import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.ResturantName,
      image: restaurant.ResturantImage,
      id: restaurant.ID,
      chef: restaurant.CheifName,
      rate: restaurant.Rate,
      since: restaurant.Since,
      working_Days: restaurant.working_Days,
    });

    const response = await Restaurants.create(restaurant);
    const result = await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { restaurants: response._id },
    });
    return response;
  }

  public async findAll() {
    const data = await Restaurants.aggregate([
      {
        $project: {
          _id: false,
        },
      },
    ]);
    return data;
  }
  public async mostPopularRestaurants() {
    const data = await Restaurants.aggregate([
      {
        $sort: { rate: -1 },
      },
      {
        $project: {
          name: true,
          _id: false,
          image: true,
          chef: true,
        },
      },
      {
        $limit: 3,
      },
    ]);
    return data;
  }
  public async findDishesOfResturant(param: { [key: string]: Number }) {
    const data = await Restaurants.aggregate([
      {
        $match: {
          id: param.ID,
        },
      },
      {
        $lookup: {
          from: "dishes",
          localField: "id",
          foreignField: "ResturantID",
          as: "dishes",
        },
      },
      {
        $project: {
          name: true,
          _id: false,
          id: true,
          image: true,
          dishes: true,
          chef: true,
        },
      },
    ]);
    return data;
  }
}
