import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.post("/restaurantPage", RestaurantsController.getDishOfResturant);
router.get(
  "/mostpopularRestuarants",
  RestaurantsController.mostPopularRestaurants
);

export default router;
