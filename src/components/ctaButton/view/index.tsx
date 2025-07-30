import type { ctaButtonProps } from '../interface/ctaButton.interface';
import { useHandleCtaClick } from '../controller/handleCtaClick';
import { CreateComponent } from '../../../utils/createComponent';
import './ctaButton.css';
import clsx from 'clsx';

export const CtaButton = ({
  id,
  elementType,
  type,
  text,
  className,
  currentValue,
  operation,
  alertMessage,
  onClick: externalOnClick,
}: ctaButtonProps) => {
  const {
    onClick: internalOnClick,
    isVisible,
    displayText,
  } = useHandleCtaClick({
    operation,
    alertMessage,
    currentValue,
    text,
  });

  const handleClick = externalOnClick ?? internalOnClick;

  if (!isVisible) return null;

  return (
    <CreateComponent
      elementType={elementType}
      id={id}
      type={type}
      text={displayText}
      className={clsx('button', className)}
      onClick={handleClick}
    />
  );
};
