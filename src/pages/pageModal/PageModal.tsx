import { useState } from 'react';
import { CtaButton } from '../../components/ctaButton/view';
import { Modal } from '../../components/modal/view';

export function PageModal() {
  const [openModalId, setOpenModalId] = useState<null | 'message' | 'content'>(
    null,
  );

  const openModal = (id: 'message' | 'content') => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  const mockContentJSX = (
    <div>
      <h4>Custom Content</h4>
      <p>This is a modal with custom content. You can add any HTML here:</p>
      <ul>
        <li>Lists</li>
        <li>Images</li>
        <li>Forms</li>
      </ul>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="box">
        <div className="modal-buttons-container">
          <CtaButton
            id="open-message-modal"
            elementType="button"
            text="Message Modal"
            className="secondary"
            onClick={() => openModal('message')}
          />
          <CtaButton
            id="open-content-modal"
            elementType="button"
            text="Content Modal"
            className="secondary"
            onClick={() => openModal('content')}
          />
        </div>
        <Modal
          elementType="div"
          className="modal"
          type="message"
          isOpen={openModalId === 'message'}
          headertext="Message Modal"
          messageText="This is a message modal example."
          onClose={closeModal}
          onOk={() => console.log('OK clicked')}
        />
        <Modal
          elementType="div"
          className="modal"
          type="content"
          isOpen={openModalId === 'content'}
          headertext="Content Modal"
          onClose={closeModal}
        >
          {mockContentJSX}
        </Modal>
      </div>
    </div>
  );
}
