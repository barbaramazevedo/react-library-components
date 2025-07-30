import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { PageRating } from './pages/pageRating/PageRating';
import { PageCardRating } from './pages/pageCardRating/PageCardRating';
import { PageNotificationToast } from './pages/pageNotificationToast/PageNotificationToast';
import { PageStepper } from './pages/pageStepper/PageStepper';
import { PageModal } from './pages/pageModal/PageModal';
import { PageCtaButton } from './pages/pageCtaButton/PageCtaButton';
import { PageHyperlink } from './pages/pageHyperlink/PageHyperlink';
import { PageTitle } from './pages/pageTitle/PageTitle';
import { PageToDoList } from './pages/pageToDoList/PageToDoList';
import { PageStepButton } from './pages/pageStepButton/pageStepButton';
import { Header } from './components/Header/header';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeContainer } from './components/themeContainer/view/ThemeContainer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/ctabutton" />} />
            <Route path="/ctabutton" element={<PageCtaButton />} />
            <Route path="/hyperlink" element={<PageHyperlink />} />
            <Route path="/modal" element={<PageModal />} />
            <Route path="/stepbutton" element={<PageStepButton />} />
            <Route path="/stepper" element={<PageStepper />} />
            <Route path="/title" element={<PageTitle />} />
            <Route path="/todolist" element={<PageToDoList />} />
            <Route path="/card-rating" element={<PageCardRating />} />
            <Route path="/rating" element={<PageRating />} />
            <Route
              path="/notification-toast"
              element={<PageNotificationToast />}
            />
          </Routes>
        </ThemeContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
