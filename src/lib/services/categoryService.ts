// Category CRUD operations

import { get } from "svelte/store";
import { categories } from "../stores/categoryStore";
import { Category } from "../models/Category";
import { deleteAllInCategory } from "./todoService";

// Function to create a new Category
export function createCategory(categoryData: Partial<Category>) {
  const newCategory = new Category(categoryData);
  categories.update((items: Category[]) => [...items, newCategory]);
  return newCategory;
}

// Function to read Category by ID
export function getCategoryByID(id: string) {
  return get(categories).find((category: Category) => category.id === id);
}

// Function to update a Category
export function updateCategory(id: string, categoryData: Partial<Category>) {
  let updatedCategory = null;

  categories.update((items: Category[]) =>
    items.map((category) => {
      if (category.id === id) {
        updatedCategory = category.update(categoryData);
        return updatedCategory;
      }
      return category;
    })
  );
  return updatedCategory;
}

// Function to delete a Category
export function deleteCategory(id: string, deleteAssociatedTodos = false) {
  const categoryToDelete = getCategoryByID(id);

  categories.update((items) =>
    items.filter((category: Category) => category.id !== id)
  );

  if (deleteAssociatedTodos) {
    deleteAllInCategory(categoryToDelete.id);
  }

  return categoryToDelete;
}
