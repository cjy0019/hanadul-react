import styled from 'styled-components';
import { useCustomNavigate } from '../../../hooks/useCustomNavigate';
import { useTimer } from '../../../hooks/useTimer';
import palette from '../../../styles/palette';
import { padZeroToSeconds } from '../../../utils/time/padZeroToSeconds';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import SubTitle from '../../common/SubTitle';
import LongButton from '../../login/atoms/LongButton';
import CertificateInput from '../atoms/CertificateInput';

const ConfirmCodeTemplate = () => {
  const { minutes, seconds } = useTimer();
  const { goBack } = useCustomNavigate();

  return (
    <Container>
      <Contents>
        <SubTitle>Information</SubTitle>
        <InputWrapper>
          <div style={{ position: 'relative' }}>
            <CertificateInput placeHolder="CONFIRM CODE" />
            <Time>{`${minutes} : ${padZeroToSeconds(seconds)}`}</Time>
          </div>
          <ResendContainer>
            <p>Didn't receive a text message?</p>
            <ResendButton>Re-send</ResendButton>
          </ResendContainer>
          <ButtonWrapper>
            <LongButton buttonTheme="email">OK</LongButton>
            <LongButton handleClick={goBack} buttonTheme="goBack">
              BACK
            </LongButton>
          </ButtonWrapper>
        </InputWrapper>
      </Contents>
    </Container>
  );
};

const InputWrapper = styled.div`
  width: 100%;
`;

const Time = styled.div`
  color: ${palette.white};
  font-size: 17px;
  font-weight: 600;
  position: absolute;
  right: 10px;
  bottom: 17px;
`;

const ResendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  & > p {
    color: ${palette.white};
    font-size: 17px;
  }
`;

const ResendButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${palette.lightGreen};
  border-radius: 3px;
  padding: 3px 5px;
  border: 2px solid ${palette.lightGreen};
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export default ConfirmCodeTemplate;
