import { TodoItemView } from '../toDoItem/toDoItem.view';
import { FaEdit } from 'react-icons/fa';
import { IoTrashBin } from 'react-icons/io5';
import './toDoList.css';
import type { TodoListBoxProps } from './interface/toDoListBox.interface';

export function TodoListBox({
  list,
  onEdit,
  onDelete,
  onToggleItem,
}: TodoListBoxProps) {
  return (
    <div className="list-box">
      <div className="list-header">
        <h4>{list.title}</h4>
        <div className="list-actions">
          <button onClick={onEdit} className="icon-form">
            <FaEdit />
          </button>
          <button onClick={onDelete} className="icon-form">
            <IoTrashBin />
          </button>
        </div>
      </div>
      {list.items.map((item) => (
        <TodoItemView
          key={item.id}
          item={item}
          onToggle={() => onToggleItem(item.id)}
        />
      ))}
    </div>
  );
}
