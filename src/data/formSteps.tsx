import type { ChangeEvent } from 'react';
import type { StepItem } from '../components/stepper/interface/stepper.interface';
import type { formData } from './interface/formData';
import '../components/stepper/view/stepper.css';

interface FormStepsProps {
  formData: formData;
  setFormData: React.Dispatch<React.SetStateAction<formData>>;
}

export function getFormSteps({
  formData,
  setFormData,
}: FormStepsProps): StepItem[] {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fields = [
    { name: 'name', label: 'Nome:' },
    { name: 'email', label: 'Email:' },
  ];

  const addressFields = [
    { name: 'address', label: 'Address:' },
    { name: 'city', label: 'City:' },
  ];

  return [
    {
      label: 'Personal Information',
      content: (
        <div className="formGroup">
          {fields.map(({ name, label }) => (
            <label key={name}>
              {label}
              <input
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
      ),
      validate: () =>
        formData.name.trim() !== '' && formData.email.includes('@'),
    },
    {
      label: 'Address',
      content: (
        <div className="formGroup">
          {addressFields.map(({ name, label }) => (
            <label key={name}>
              {label}
              <input
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
      ),
      validate: () =>
        formData.address.trim() !== '' && formData.city.trim() !== '',
    },
    {
      label: 'Confirm',
      content: (
        <div className="formGroup">
          <h4>Confirm your data:</h4>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Adress:</strong> {formData.address}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
        </div>
      ),
      validate: () => true,
    },
  ];
}
