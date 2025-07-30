import type { TodoItem } from '../../../interface/toDoItem.interface';
import type { TodoList } from '../../../interface/toDoList.interface';

export interface UseTodoModalReturn {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  items: TodoItem[];
  handleAddItem: (text: string) => void;
  handleRemoveItem: (index: number) => void;
  handleItemChange: (index: number, value: string) => void;
  handleSubmit: (onSave: (list: TodoList) => void, listId?: string) => void;
}
