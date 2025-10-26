
import {Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ChatPage from './pages/chatPage.jsx';
import CallPage from './pages/CallPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
const App = () => {
  return (

      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/call" element={<CallPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
  
  );
}

export default App;
