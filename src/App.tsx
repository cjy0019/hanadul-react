import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConfirmCodePage from './pages/ConfirmCodePage';
import EmailLoginPage from './pages/EmailLoginPage';
import GenderBirthInfoPage from './pages/GenderBirthInfoPage';
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
          <Route path="confirm-code" element={<ConfirmCodePage />} />
          <Route path="gender-information" element={<GenderBirthInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
