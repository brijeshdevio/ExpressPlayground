import { UserRepository } from "../repositories";

class UserService extends UserRepository {
  constructor() {
    super();
  }

  async checkUniqueEmail(email: string) {
    const isUser = await this.findByEmail(email);
    return !isUser;
  }

  async createUser(data: any) {
    if (!(await this.checkUniqueEmail(data.email))) {
      throw new Error("Email already exists");
    }
    const user = await this.create(data);
    return user;
  }

  async loginUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== password) {
      throw new Error("Incorrect password");
    }
    return user;
  }

  async updateUser(id: number, data: any) {
    if (!(await this.findById(id))) {
      throw new Error("User not found");
    }
    const user = await this.update(id, data);
    return user;
  }

  async deleteUser(id: number) {
    if (!(await this.findById(id))) {
      throw new Error("User not found");
    }
    const user = await this.delete(id);
    return user;
  }
}

export default UserService;
