import '../../styles/global/navbox.css';
import { Title } from '../title/view';
import { Hyperlink } from '../hyperlink/view';

export function Header() {
  return (
    <header className="nav-header">
      <Title elementType="h3" text="React Context Api" id="h3" />
      <nav className="nav-container">
        <Hyperlink
          elementType="a"
          href="/ctabutton"
          className="font-regular"
          target="_self"
          title="Click to go to CTA Button"
          text="🔘 CTA"
        />
        <Hyperlink
          elementType="a"
          href="/card-rating"
          className="font-regular"
          target="_self"
          title="Click to go to Card Rating"
          text="🃏 Card Rating"
        />
        <Hyperlink
          elementType="a"
          href="/hyperlink"
          className="font-regular"
          target="_self"
          title="Click to go to Hyperlink"
          text="🔗 Hyperlink"
        />
        <Hyperlink
          elementType="a"
          href="/modal"
          className="font-regular"
          target="_self"
          title="Click to go to Modal"
          text="💬 Modal"
        />
        <Hyperlink
          elementType="a"
          href="/notification-toast"
          className="font-regular"
          target="_self"
          title="Click to go to Notification Toast"
          text="🔔 Notification"
        />
        <Hyperlink
          elementType="a"
          href="/stepbutton"
          className="font-regular"
          target="_self"
          title="Click to go to Step Button"
          text="⏩ Step Button"
        />
        <Hyperlink
          elementType="a"
          href="/stepper"
          className="font-regular"
          target="_self"
          title="Click to go to Stepper form"
          text="📝 Stepper Form"
        />
        <Hyperlink
          elementType="a"
          href="/title"
          className="font-regular"
          target="_self"
          title="Click to go to title"
          text="🏷️ Title"
        />
        <Hyperlink
          elementType="a"
          href="/todolist"
          className="font-regular"
          target="_self"
          title="Click to go to todolist"
          text="📝 To-do List"
        />
      </nav>
    </header>
  );
}
