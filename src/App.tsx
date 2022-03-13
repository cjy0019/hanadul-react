import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailLoginPage from './pages/EmailLoginPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SendPhoneAuthPage from './pages/SendPhoneAuthPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<EmailLoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="information-certification" element={<SendPhoneAuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
