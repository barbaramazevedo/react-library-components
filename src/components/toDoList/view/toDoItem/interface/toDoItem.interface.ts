import type { TodoItem } from "../../../interface/toDoItem.interface";

export interface ToDoItemViewProps {
    item: TodoItem;
    onToggle: () => void;
}