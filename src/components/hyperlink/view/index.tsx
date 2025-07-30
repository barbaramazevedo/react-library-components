import './hyperlink.scss';
import { CreateComponent } from '../../../utils/createComponent';
import type { hyperlinkProps } from '../interface/hyperlink.interface';
import type { JSX } from 'react';

export function Hyperlink(props: hyperlinkProps): JSX.Element {
  const {
    elementType = 'a',
    href,
    target = '_self',
    title,
    className,
    dataDisable,
    'data-icon': dataIcon,
    text,
    id,
    children,
  } = props;

  return (
    <CreateComponent
      elementType={elementType}
      id={id}
      className={className}
      text={text}
      href={href}
      title={title}
      target={target}
      {...(dataDisable && { 'data-disable': 'true' })}
      {...(dataIcon && { 'data-icon': dataIcon })}
    >
      {children || text || ''}
    </CreateComponent>
  );
}
