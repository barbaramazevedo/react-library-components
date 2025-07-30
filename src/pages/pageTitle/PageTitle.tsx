import { Title } from '../../components/title/view';

export const PageTitle = () => {
  return (
    <div className="page-wrapper">
      <div className="box">
        <div className="title-container">
          <Title elementType="h1" text="Title h1" id="h1" />
          <Title elementType="h2" text="Title h2" id="h2" />
          <Title elementType="h3" text="Title h3" id="h3" />
          <Title elementType="h4" text="React Branstorm Components" id="h4" />
          <Title elementType="h5" text="React Testing Time" id="h5" />
          <Title elementType="h6" text="React Context Api" id="h6" />
        </div>
      </div>
    </div>
  );
};
