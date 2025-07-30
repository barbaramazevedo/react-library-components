import { FaCheck } from 'react-icons/fa6';
import { IoIosSquareOutline } from 'react-icons/io';
import './toDoItem.css';
import type { ToDoItemViewProps } from './interface/toDoItem.interface';

export function TodoItemView({ item, onToggle }: ToDoItemViewProps) {
  return (
    <div className="todo-item-view" onClick={onToggle}>
      {item.completed ? <FaCheck /> : <IoIosSquareOutline />}
      <span className={`todo-item-text' ${item.completed ? 'completed' : ''}`}>
        {item.text}
      </span>
    </div>
  );
}
