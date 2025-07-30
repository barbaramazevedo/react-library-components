import type { TodoList } from "../../../interface/toDoList.interface";

export interface ToDoModalContentProps {
  initialList?: TodoList | null;
  onCancel: () => void;
  onSave: (list: TodoList) => void;
}