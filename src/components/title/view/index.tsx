import './title.scss';
import { CreateComponent } from '../../../utils/createComponent';
import type { titleProps } from '../interface/title.interface';

export const Title = ({ elementType, text, id }: titleProps) => {
  return (
    <CreateComponent
      elementType={elementType}
      id={id}
      text={text}
      className="title"
    />
  );
};
