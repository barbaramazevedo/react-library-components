import { useState, useEffect } from "react";
import type { TodoList } from "../interface/toDoList.interface";

export function useTodoController() {
  const [lists, setLists] = useState<TodoList[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingList, setEditingList] = useState<TodoList | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("todoLists");
    if (stored) setLists(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(lists));
  }, [lists]);

  function addList(newList: TodoList) {
    setLists((prev) => [...prev, newList]);
  }

  function updateList(updated: TodoList) {
    setLists((prev) =>
      prev.map((list) => (list.id === updated.id ? updated : list))
    );
  }

  function deleteList(id: string) {
    setLists((prev) => prev.filter((list) => list.id !== id));
  }

  function toggleItem(listId: string, itemId: string) {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              items: list.items.map((item) =>
                item.id === itemId ? { ...item, completed: !item.completed } : item
              ),
            }
          : list
      )
    );
  }

  return {
    lists,
    isModalOpen,
    setIsModalOpen,
    editingList,
    setEditingList,
    addList,
    updateList,
    deleteList,
    toggleItem,
  };
}