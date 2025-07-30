import { useState } from 'react';
import { CtaButton } from '../../components/ctaButton/view';
import { Stepper } from '../../components/stepper/view/Stepper';
import { getFormSteps } from '../../data/formSteps';
import type { formData } from '../../data/interface/formData';

export function PageStepper() {
  const [showStepper, setShowStepper] = useState(false);

  const initialFormData = {
    name: '',
    email: '',
    address: '',
    city: '',
  };

  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  const steps = getFormSteps({ formData, setFormData });

  return (
    <div className="page-wrapper">
      <div className="box">
        {!showStepper ? (
          <CtaButton
            id="open-stepper"
            elementType="button"
            text="Open form"
            className="primary"
            onClick={() => setShowStepper(true)}
          />
        ) : (
          <Stepper
            steps={steps}
            showProgressBar={true}
            setShowStepper={setShowStepper}
            setFormData={setFormData}
            initialFormData={initialFormData}
          />
        )}
      </div>
    </div>
  );
}
