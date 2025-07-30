import type { JSX } from "react";
import type { createComponentProps } from "./interface/createComponent.interface";

export function CreateComponent({
  elementType,
  id,
  type,
  text,
  title,
  className,
  href,
  src,
  width,
  height,
  onClick,
  ...restProps
}: createComponentProps & { 
  onClick?: (e: React.MouseEvent) => void
  [key: string]: unknown
}) {
  const Element = elementType as keyof JSX.IntrinsicElements;

  const props: Record<string, unknown> = {
    ...(id && { id }),
    ...(title && { title }),
    ...(className && { className }),
    ...(onClick && { onClick }),
    ...restProps,
  };

  switch (elementType) {
    case "button":
      if (type) props.type = type;
      break;

    case "a":
      if (href) props.href = href;
      break;

    case "img":
      if (src) props.src = src;
      if (width) props.width = width;
      if (height) props.height = height;
      break;
    case "div":
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "span":
      break;
    default:
      throw new Error(`Unsupported elementType: ${elementType}`);
  }
  return <Element {...props}>{text}</Element>;
}