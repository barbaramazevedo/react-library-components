import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import type { StepButtonProps } from '../interface/stepButtons.interface';
import './stepButtons.css';

export function StepButton({
  direction,
  label,
  disabled,
  ...props
}: StepButtonProps) {
  const isFinish = direction === 'next' && label === 'Finish';

  return (
    <button
      className={`
        ${'step-button'} 
        ${direction === 'next' ? 'next-button' : 'back-button'}
        ${isFinish ? 'finish-button' : ''}
      `}
      disabled={disabled}
      {...props}
    >
      {direction === 'back' && (
        <span className={'icon-button'}>
          <FaArrowLeft />
        </span>
      )}
      {label ?? (direction === 'next' ? 'Next' : 'Return')}
      {direction === 'next' && !isFinish && (
        <span className={'icon-button'}>
          <FaArrowRight />
        </span>
      )}
    </button>
  );
}
