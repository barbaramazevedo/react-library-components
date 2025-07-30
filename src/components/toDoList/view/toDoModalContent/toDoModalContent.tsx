import { FaPlus, FaMinus } from 'react-icons/fa';
import { CtaButton } from '../../../ctaButton/view';
import type { ToDoModalContentProps } from './interface/toDoModalContent.interface';
import { useTodoModal } from './controller/useToDoModal.controller';
import { useState } from 'react';
import './toDoModalContent.css';

export function TodoModalContent({
  initialList,
  onCancel,
  onSave,
}: ToDoModalContentProps) {
  const {
    title,
    setTitle,
    items,
    handleAddItem,
    handleItemChange,
    handleSubmit,
    handleRemoveItem,
  } = useTodoModal(initialList);

  const [newItemText, setNewItemText] = useState('');

  return (
    <div className="todo-modal-content">
      <input
        type="text"
        placeholder="List title"
        className="title-input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      {items.map((item, index) => (
        <div key={item.id} className="todo-item-input">
          <input
            type="text"
            value={item.text}
            className="item-input"
            onChange={(event) => handleItemChange(index, event.target.value)}
          />
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveItem(index)}
            aria-label="Remover item"
          >
            <FaMinus />
          </button>
        </div>
      ))}
      <div className="input-with-icon">
        <input
          type="text"
          placeholder="Enter a new item..."
          value={newItemText}
          className="item-input"
          onChange={(e) => setNewItemText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && newItemText.trim()) {
              handleAddItem(newItemText.trim());
              setNewItemText('');
            }
          }}
        />
        <button
          type="button"
          className="icon-change"
          onClick={() => {
            if (newItemText.trim()) {
              handleAddItem(newItemText.trim());
              setNewItemText('');
            }
          }}
          aria-label="Add item"
        >
          <FaPlus />
        </button>
      </div>
      <div className="modal-footer">
        <CtaButton
          id="cancel-toDoList"
          elementType="button"
          text="Cancel"
          className="secondary"
          onClick={onCancel}
        />
        <CtaButton
          id="done-toDoList"
          elementType="button"
          text="Done"
          className="primary"
          onClick={() => handleSubmit(onSave, initialList?.id)}
        />
      </div>
    </div>
  );
}
