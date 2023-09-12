import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (userData: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: userData,
  });
  return newUser;
};

const getAllUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (userId: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user;
};

const updateUserById = async (
  userId: string,
  userData: Partial<User>
): Promise<User | null> => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: userData,
  });
  return updatedUser;
};

const getUserProfile = async (
  userId: string
): Promise<Partial<User> | null> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });

  return user;
};

const deleteUserById = async (userId: string): Promise<void> => {
  await prisma.user.delete({
    where: { id: userId },
  });
};

export const userService = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserProfile,
};
