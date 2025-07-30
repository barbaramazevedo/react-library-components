import { useState } from 'react';
import type {
  UseStepperProps,
  UseStepperReturn,
} from './interfaces/useStepper.interface';

export function useStepper({
  totalSteps,
  initialStep = 0,
  onSubmit,
  onComplete = () => alert('Form completed successfully!'),
}: UseStepperProps): UseStepperReturn {
  const [step, setStep] = useState(initialStep);

  const next = () =>
    isLastStep
      ? (onSubmit?.(), onComplete())
      : setStep((prevStep) => prevStep + 1);

  const back = () => {
    if (step > 0) setStep((step) => step - 1);
  };

  const reset = () => setStep(initialStep);

  const isFirstStep = step === 0;
  const isLastStep = step === totalSteps - 1;

  return {
    step,
    next,
    back,
    reset,
    isFirstStep,
    isLastStep,
  };
}
