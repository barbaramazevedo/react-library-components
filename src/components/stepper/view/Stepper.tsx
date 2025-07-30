import { useFormStepper } from "../controller/useFormStepper";
import type { StepperProps } from "../interface/stepper.interface";
import { StepperView } from "./stepper.view";

export function Stepper(props: StepperProps) {
  const controller = useFormStepper(props);

  return <StepperView {...controller} showProgressBar={props.showProgressBar} />;
}