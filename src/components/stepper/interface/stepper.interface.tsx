import type { ReactNode } from "react";
import type { formData } from "../../../data/interface/formData";

export interface StepItem {
  label: string;
  content: ReactNode;
  validate?: () => boolean;
}

export interface StepperProps {
  steps: StepItem[];
  showProgressBar: boolean;
  initialStep?: number;
  setShowStepper: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<formData>>;
  initialFormData: formData;
}

export interface StepperViewProps {
  current: StepItem;
  step: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  handleBack: () => void;
  handleNext: () => void;
  progress: number;
  showProgressBar?: boolean;
}
