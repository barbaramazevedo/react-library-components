import type { TodoList } from "../../../interface/toDoList.interface";

export interface TodoListBoxProps {
  list: TodoList;
  onEdit: () => void;
  onDelete: () => void;
  onToggleItem: (itemId: string) => void;
}