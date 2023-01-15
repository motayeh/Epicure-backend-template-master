import { RestaurantsDal } from '../dal/restaurants.dal';

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }
  public async getDishOfRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.findDishesOfResturant(restaurant);
    return res;
  }

  public async mostPopularRestaurants() {
    const dal = new RestaurantsDal();
    const res = dal.mostPopularRestaurants();
    return res;
  }
}
