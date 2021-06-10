import Database from '../index';

class UserDB extends Database {
  constructor() {
    super('users');
  }

  addUser(user) {
    return this.add(user);
  }

  updateUser(user, id) {
    return this.put(user, id);
  }

  deleteUser(id) {
    return this.delete(id);
  }

  getUser(id) {
    return this.getByID(id);
  }

  getUsers() {
    return this.getAll();
  }
}
export default new UserDB();
