import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailLoginPage from './pages/EmailLoginPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<EmailLoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
