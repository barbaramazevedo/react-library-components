import { useState } from "react";
import { useRemove } from "../../../utils/useRemove";

export function useHandleCtaClick(params: {
  operation?: 'sum' | 'deduct' | 'remove' | 'alert';
  alertMessage?: string;
  currentValue?: number;
  text: string;
}) {
  const { operation, alertMessage, currentValue = 0, text } = params;
  const [value, setValue] = useState(currentValue);
  const { isVisible, remove } = useRemove();

  const onClick = () => {
    switch (operation) {
      case 'sum':
        setValue(value + 1);
        break;

      case 'deduct':
        if (value <= 0) {
          alert("Value cannot be negative");
        } else {
          setValue(value - 1);
        }
        break;

      case 'remove':
        remove();
        break;

      case 'alert':
        alert(alertMessage);
        break;

      default:
        break;
    }
  };

  const displayText =
    operation === 'sum' || operation === 'deduct'
      ? `${text} - ${value}`
      : text;

  return { onClick, isVisible, displayText };
}