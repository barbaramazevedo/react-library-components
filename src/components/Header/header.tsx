import '../../styles/global/navbox.css';
import { Title } from '../title/view';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="nav-header">
      <Title elementType="h3" text="React Library Components" id="h3" />
      <nav className="nav-container">
        <Link
          to="/ctabutton"
          className="font-regular"
          target="_self"
          title="Click to go to CTA Button"
        >
          {' '}
          🔘 CTA
        </Link>
        <Link
          to="/card-rating"
          className="font-regular"
          target="_self"
          title="Click to go to Card Rating"
        >
          🃏 Card Rating
        </Link>
        <Link
          to="/hyperlink"
          className="font-regular"
          target="_self"
          title="Click to go to Hyperlink"
        >
          🔗 Hyperlink
        </Link>
        <Link
          to="/modal"
          className="font-regular"
          target="_self"
          title="Click to go to Modal"
        >
          💬 Modal
        </Link>
        <Link
          to="/notification-toast"
          className="font-regular"
          target="_self"
          title="Click to go to Notification Toast"
        >
          🔔 Notification
        </Link>
        <Link
          to="/stepbutton"
          className="font-regular"
          target="_self"
          title="Click to go to Step Button"
        >
          ⏩ Step Button
        </Link>
        <Link
          to="/stepper"
          className="font-regular"
          target="_self"
          title="Click to go to Stepper form"
        >
          📝 Stepper Form
        </Link>
        <Link
          to="/title"
          className="font-regular"
          target="_self"
          title="Click to go to title"
        >
          🏷️ Title
        </Link>
        <Link
          to="/todolist"
          className="font-regular"
          target="_self"
          title="Click to go to todolist"
        >
          📝 To-do List
        </Link>
      </nav>
    </header>
  );
}
