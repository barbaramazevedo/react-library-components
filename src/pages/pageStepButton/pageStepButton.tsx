import { useStepper } from '../../components/stepButtons/controller/useStepper';
import { StepButton } from '../../components/stepButtons/view';

export function PageStepButton() {
  const { step, next, back, reset, isFirstStep, isLastStep } = useStepper({
    totalSteps: 3,
    initialStep: 0,
    onComplete: () => {
      alert('Form completed successfully!');
      reset();
    },
  });

  return (
    <div className="page-wrapper">
      <div className="box">
        <p>Etapa atual: {step + 1}</p>
        <div className="step-buttons-container">
          <StepButton direction="back" onClick={back} disabled={isFirstStep} />
          <StepButton
            direction="next"
            onClick={next}
            label={isLastStep ? 'Finish' : undefined}
          />
        </div>
      </div>
    </div>
  );
}
