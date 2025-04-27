// Svelte store for categories
import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/helpers";
import { Category } from "../models/Category";

// Default categories if none exist
const defaultCategories = [
  { id: "home", name: "Home", color: "#FF5733" },
  { id: "work", name: "Work", color: "#33FF57" },
  { id: "personal", name: "Personal", color: "#3357FF" },
];

// Initialize from localStorage or with defaults
let initialCategoriesData: Category[] = defaultCategories;
if (browser) {
  initialCategoriesData =
    getFromLocalStorage("categories") || defaultCategories;
}
const initialCategories = initialCategoriesData.map(
  (cat: Partial<Category>) => new Category(cat)
);

export const categories = writable<Category[]>(initialCategories);

// Subscribe to changes and save to localStorage
categories.subscribe((value) => {
  saveToLocalStorage("categories", value);
});
