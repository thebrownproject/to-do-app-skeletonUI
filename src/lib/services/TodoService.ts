// Todo CRUD operations

import { get } from "svelte/store";
import { todos } from "../stores/todoStore";
import { Todo } from "../models/Todo";

// Function to create a new Todo
export function createTodo(tododata: Partial<Todo>) {
  const newTodo = new Todo(tododata);
  todos.update((items: Todo[]) => [...items, newTodo]);
  return newTodo;
}

// Function to read Todos by ID
export function getTodoByID(id: string) {
  return get(todos).find((todo: Todo) => todo.id === id);
}

// Function to read Todos by category
export function getTodosByCategory(categoryId: string): Todo[] {
  return get(todos).filter((todo: Todo) => todo.category === categoryId);
}

// Function to update a Todo
export function updateTodo(id: string, todoData: Partial<Todo>) {
  let updatedTodo = null;

  todos.update((items: Todo[]) =>
    items.map((todo) => {
      if (todo.id === id) {
        updatedTodo = todo.update(todoData);
        return updatedTodo;
      }
      return todo;
    })
  );
  return updatedTodo;
}

// Functino to delete a Todo
export function deleteTodo(id: string) {
  todos.update((items: Todo[]) => items.filter((todo: Todo) => todo.id !== id));
}
