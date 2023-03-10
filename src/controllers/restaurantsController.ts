import { Request, Response } from 'express';
import { RestaurantsService } from '../services/restaurants.service';

export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }

  public static async createRestaurant(req: Request, res: Response) {
    const params = req.body;
    const service = new RestaurantsService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  }
  public static async getDishOfResturant(req: Request, res: Response) {
    const param = req.body;
    const service = new RestaurantsService();
    const restaurants = await service.getDishOfRestaurant(param);
    return res.send(restaurants);
  }
  public static async mostPopularRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.mostPopularRestaurants();
    return res.send(restaurants);
  }
}
