"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const restaurants_dal_1 = require("../dal/restaurants.dal");
class RestaurantsService {
    async getRestaurants() {
        const dal = new restaurants_dal_1.RestaurantsDal();
        const res = await dal.findAll();
        return res;
    }
    async createRestaurant(restaurant) {
        const dal = new restaurants_dal_1.RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    }
}
exports.RestaurantsService = RestaurantsService;
