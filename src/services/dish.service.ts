import { DishDal } from "../dal/dish.dal";

export class DishService {
  public async getDishes(param: { [key: string]: string }) {
    const dal = new DishDal();
    const res = await dal.getDish(param);
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishDal();
    const res = await dal.createDish(dish);
    return res;
  }
  public async allDishes() {
    const dal = new DishDal();
    const res = await dal.allDishes();
    return res;
  }
}
