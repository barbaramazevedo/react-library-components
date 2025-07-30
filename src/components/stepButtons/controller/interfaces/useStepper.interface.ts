export interface UseStepperReturn {
  step: number;
  next: () => void;
  back: () => void;
  reset: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export interface UseStepperProps {
  totalSteps: number;
  initialStep?: number;
  onComplete?: () => void;
  onSubmit?: () => void;
}
