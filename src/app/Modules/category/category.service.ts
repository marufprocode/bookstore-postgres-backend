import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

const createCategory = async (categoryData: Category): Promise<Category> => {
  const newCategory = await prisma.category.create({
    data: categoryData,
  });
  return newCategory;
};

const getAllCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();
  return categories;
};

const getCategoryById = async (categoryId: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });
  return category;
};

const updateCategoryById = async (categoryId: string, categoryData: Partial<Category>): Promise<Category | null> => {
  const updatedCategory = await prisma.category.update({
    where: { id: categoryId },
    data: categoryData,
  });
  return updatedCategory;
};

const deleteCategoryById = async (categoryId: string): Promise<void> => {
  await prisma.category.delete({
    where: { id: categoryId },
  });
};

export const categoryService =  { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById };
