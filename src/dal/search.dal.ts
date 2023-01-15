import { Response, response } from 'express';
import Restaurants from '../db/models/restaurants';
import Results from '../db/models/search';

export class SearchDal {
  public async results(user: any) {
    const result = new Results({
      input: user.input,
    });
    const response = Results.create(result);
    const res = await Restaurants.exists({ input: result.input });
    return res;
  }

  public async findMatched() {
    const data = await Results.aggregate([
      {
        $project: {
          _id: false,
        },
      },
    ]);
    return data;
  }
}
