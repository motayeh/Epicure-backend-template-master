import Results from '../db/models/search';

export class SearchService {
  public async getResults(search) {
    const dal = new SearchDal();
    const res = await dal.getResults(param);
    return res;
  }
}
