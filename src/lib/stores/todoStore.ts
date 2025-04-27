// Svelte store for to-do data
import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/helpers";
import { Todo } from "../models/Todo";

// Initialize from localStorage or with defaults
let initialTodos: Todo[] = [];
if (browser) {
  const storedTodos = getFromLocalStorage("todos") || [];
  initialTodos = storedTodos.map((todo: Partial<Todo>) => new Todo(todo));
}

export const todos = writable<Todo[]>(initialTodos);

// Subscribe to changes and save to localStorage
if (browser) {
  todos.subscribe((value) => {
    saveToLocalStorage("todos", value);
  });
}
