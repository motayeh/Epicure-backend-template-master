import express from 'express';
import chefsRoutes from './chefs.routes';
import restaurantsRoutes from './restaurants.routes';
import DishRoutes from './dish.routes';
import UserRoutes from './users.routes';
const router = express.Router();

router.use('/api/chefs/', chefsRoutes);
router.use('/api/restaurants/', restaurantsRoutes);
router.use('/api/dish/', DishRoutes);
router.use('/api/users/', UserRoutes);
export default router;
