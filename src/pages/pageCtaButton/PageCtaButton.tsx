import { CtaButton } from '../../components/ctaButton/view';

export function PageCtaButton() {
  return (
    <div className="page-wrapper">
      <div className="box">
        <div className="buttons-container">
          <CtaButton
            id="button"
            elementType="button"
            text="Click to sum"
            className="primary"
            currentValue={0}
            operation="sum"
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Click to deduct"
            className="primary"
            currentValue={5}
            operation="deduct"
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Click me"
            className="primary"
            operation="alert"
            alertMessage="Thank you. This is used to collect user feedback."
          />
          <CtaButton
            id="button"
            elementType="button"
            text="More info"
            className="secondary"
            operation="alert"
            alertMessage="Soon you will be able to see more information here."
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Unavailable"
            className="disable"
          />
        </div>
      </div>
    </div>
  );
}
