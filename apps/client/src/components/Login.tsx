import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 25px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  width: 100%;
  height: 470px;
  max-width: 500px;
  overflow: hidden;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-top: 40px;
  font-size: 26px;
  font-weight: 700;
  color: #383838;
  text-align: center;
`;

const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;

const InputTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #383838;
`;

const InputWrap = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid #e2e0e0;
  &:focus-within {
    border: 1px solid #383838;
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  &::placeholder {
    color: #dadada;
  }
`;

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`;

const ButtonWrap = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #383838;
  margin-bottom: 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

const BottomText = styled.div`
  margin-bottom: 40px;
  font-size: 13px;
`;

function Login() {
  return (
    <LoginContainer>
      <TitleWrap>로그인</TitleWrap>
      <ContentWrap>
        <InputTitle>이메일 주소</InputTitle>
        <InputWrap>
          <Input placeholder='test@gmail.com'></Input>
        </InputWrap>
        <ErrorMessageWrap>올바른 이메일을 입력해주세요.</ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>
        <InputWrap>
          <Input placeholder='영문, 숫자 포함 8자 이상'></Input>
        </InputWrap>
        <ErrorMessageWrap>영문, 숫자 포함 8자 이상 입력해주세요.</ErrorMessageWrap>
      </ContentWrap>
      <ButtonWrap>
        <Button disabled={true}>확인</Button>
      </ButtonWrap>
      <BottomText>
        아직 회원이 아니신가요? <Link to='/join'>회원가입 하러가기</Link>
      </BottomText>
    </LoginContainer>
  );
}

export default Login;
