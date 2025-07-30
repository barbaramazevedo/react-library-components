import { useState, useEffect } from 'react';
import type { TodoList } from '../../../interface/toDoList.interface';
import type { TodoItem } from '../../../interface/toDoItem.interface';
import type { UseTodoModalReturn } from './useToDoModalController.interface';

export function useTodoModal(
  initialList?: TodoList | null,
): UseTodoModalReturn {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    if (initialList) {
      setTitle(initialList.title);
      setItems(initialList.items);
    }
  }, [initialList]);

  const handleAddItem = (text: string) => {
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  };

  const handleItemChange = (index: number, value: string) => {
    const updated = [...items];
    updated[index].text = value;
    setItems(updated);
  };

  const handleSubmit = (onSave: (list: TodoList) => void, listId?: string) => {
    const newList: TodoList = {
      id: listId || crypto.randomUUID(),
      title,
      items: items.filter((item) => item.text.trim() !== ''),
    };
    onSave(newList);
  };

  const handleRemoveItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    title,
    setTitle,
    items,
    handleAddItem,
    handleItemChange,
    handleSubmit,
    handleRemoveItem,
  };
}
