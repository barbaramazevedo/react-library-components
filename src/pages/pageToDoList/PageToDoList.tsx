import { CtaButton } from '../../components/ctaButton/view';
import { Modal } from '../../components/modal/view';
import { useTodoController } from '../../components/toDoList/controller/useToDoList.controller';
import { TodoListBox } from '../../components/toDoList/view/toDoList/toDoListBox.view';
import { TodoModalContent } from '../../components/toDoList/view/toDoModalContent/toDoModalContent';

export const PageToDoList = () => {
    const {
    lists,
    isModalOpen,
    setIsModalOpen,
    editingList,
    setEditingList,
    addList,
    updateList,
    deleteList,
    toggleItem,
  } = useTodoController();

    return (
        <div className="page-wrapper">
            <div className="box">
                <div className="toDoList-container">
                    <CtaButton
                        id="open-toDoList"
                        elementType="button"
                        text="+"
                        className="primary"
                        onClick={() => { setIsModalOpen(true); setEditingList(null); }}
                    />
                    {lists.map((list) => (
                    <TodoListBox
                        key={list.id}
                        list={list}
                        onEdit={() => {
                            setEditingList(list);
                            setIsModalOpen(true);
                        }}
                        onDelete={() => deleteList(list.id)}
                        onToggleItem={(itemId) => toggleItem(list.id, itemId)}
                    />
                    ))}

                    {isModalOpen && (
                        <Modal
                            elementType="div"
                            id="todo-modal"
                            className="modal"
                            animation="fade"
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            headertext={editingList ? "Edit To-do List" : "Add To-do List"}
                            type="content"
                        >
                        <TodoModalContent
                            initialList={editingList}
                            onCancel={() => setIsModalOpen(false)}
                            onSave={(list) => {
                            if (editingList) {
                                updateList(list);
                            } else {
                                addList(list);
                            }
                            setIsModalOpen(false);
                            }}
                        />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
}