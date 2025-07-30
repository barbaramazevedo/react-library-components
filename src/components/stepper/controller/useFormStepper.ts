import { useStepper } from "../../stepButtons/controller/useStepper";
import type { StepperProps } from "../interface/stepper.interface";

export function useFormStepper({ 
    steps,
    showProgressBar,
    setShowStepper,
    setFormData,
    initialFormData,
    initialStep = 0  
  }: StepperProps) {
  const { step, next, back, isFirstStep, isLastStep } = useStepper({
    totalSteps: steps.length,
    initialStep
  });

  const currentStep = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const handleNext = () => {
    const isValid = currentStep.validate ? currentStep.validate() : true;
    if (!isValid) {
      alert('Please fill in the form fields correctly!');
      return;
    }
    if (isLastStep) {
      handleSubmit();
    } else {
      next();
    }
  };

  const handleSubmit = () => {
    alert("Your form has been completed successfully!");
    setShowStepper(false);
    setFormData(initialFormData);
  };

  return {
    current: currentStep,
    step,
    isFirstStep,
    isLastStep,
    handleBack: back,
    handleNext,
    progress,
    showProgressBar
  };
}