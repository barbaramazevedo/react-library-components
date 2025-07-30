import { CreateComponent } from '../../../utils/createComponent';
import { CtaButton } from '../../ctaButton/view';
import { Title } from '../../title/view';
import type { ModalMessage, ModalProps } from '../interface/modal.interface';
import './modal.scss';

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    animation = 'fade',
    onClose,
    headertext,
    type,
    children,
  } = props;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleOk = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === 'message') {
      (props as ModalMessage).onOk?.();
    }
    onClose();
  };

  return (
    <div
      className="modal"
      data-open={isOpen ? 'true' : 'false'}
      data-animation={animation}
      onClick={(e) => e.target === e.currentTarget && handleClose(e)}
    >
      <div className="modal-content">
        <CtaButton
          id="button"
          elementType="button"
          className="btn-close"
          text="×"
          onClick={handleClose}
        />

        {headertext && (
          <Title elementType="h3" className="h3" text={headertext} />
        )}

        {type === 'message' ? (
          <>
            <CreateComponent
              elementType="p"
              text={(props as ModalMessage).messageText}
              className="modal-message"
            />
            <CtaButton
              id="button"
              elementType="button"
              className="primary"
              text="OK"
              onClick={handleOk}
            />
          </>
        ) : typeof children === 'string' ? (
          <div>{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
