import { prisma } from "../db";

class UserRepository {
  async create(data: any) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }

  async findAll() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async findById(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: number, data: any) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  }

  async delete(id: number) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
}

export default UserRepository;
