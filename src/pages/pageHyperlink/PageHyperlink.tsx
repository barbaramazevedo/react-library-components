import { Hyperlink } from "../../components/hyperlink/view";

export function PageHyperlink() {
      return (
        <div className="page-wrapper">
            <div className="box">
                <div className='links-container'>
                    <Hyperlink 
                        elementType="a"
                        href="/small-link"
                        className="font-small"
                        data-icon="ok"
                        target="_blank"
                        title="This is a small link with an icon"
                        text="Small Link"
                    />
                    <Hyperlink 
                        elementType="a"
                        href="/regular-link"
                        className="font-regular"
                        data-icon="alert"
                        target="_self"
                        title="This is a regular link with an icon"
                        text="Regular Link"
                    />
                    <Hyperlink 
                        elementType="a"
                        href="#"
                        className="font-big"
                        data-icon="danger"
                        target="_parent"
                        title="This is a big link with an icon"
                        text="Big Link"
                    />
                    <Hyperlink 
                        elementType="a"
                        href="#"
                        dataDisable={true}
                        data-icon="disable"
                        className="font-regular"
                        target="_top"
                        title="This link is disabled"
                        text="Disabled Link"
                    />
                </div>  
            </div>
        </div>
    );
}