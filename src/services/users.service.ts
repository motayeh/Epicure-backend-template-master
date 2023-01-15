import { UsersDal } from './../dal/users.dal';
export class UserService {
  public async getUser() {
    const dal = new UsersDal();
    const res = await dal.findAll();
    return res;
  }
  public async logIn(user: any) {
    const dal = new UsersDal();
    const res = dal.logIn(user);
    return res;
  }

  public async createUser(user: any) {
    const dal = new UsersDal();
    const res = await dal.createUser(user);
    return res;
  }
}
export default UserService;
