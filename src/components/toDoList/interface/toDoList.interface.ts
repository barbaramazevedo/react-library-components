import type { TodoItem } from "./toDoItem.interface";

export interface TodoList {
  id: string;
  title: string;
  items: TodoItem[];
}