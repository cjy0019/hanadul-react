import styled from 'styled-components';
import LoginTemplate from '../components/login/template/LoginButtonTemplate';

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <LoginTemplate />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background-color: yellow;
`;

export default LoginPage;
