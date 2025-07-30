import { StepButton } from '../../stepButtons/view';
import type { StepperViewProps } from '../interface/stepper.interface';
import './stepper.css';

export function StepperView({
  current,
  step,
  isFirstStep,
  isLastStep,
  handleBack,
  handleNext,
  progress,
  showProgressBar,
}: StepperViewProps) {
  return (
    <div className="stepper">
      {showProgressBar && (
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="step-label">
        Step {step + 1}: {current.label}
      </div>

      <div className="step-content">{current.content}</div>

      <div className="step-buttons">
        <StepButton
          direction="back"
          onClick={handleBack}
          disabled={isFirstStep}
        />
        <StepButton
          direction="next"
          onClick={handleNext}
          label={isLastStep ? 'Finish' : undefined}
        />
      </div>
    </div>
  );
}
