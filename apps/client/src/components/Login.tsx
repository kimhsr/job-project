import React, { useCallback, useEffect, useState } from 'react';
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
  margin-top: 20px;
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

const User = {
  email: 'test@test.com',
  pw: 'zxcv1234',
};

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('????????? ??????');
    } else {
      alert('????????? ??????');
    }
  };

  return (
    <LoginContainer>
      <TitleWrap>?????????</TitleWrap>
      <ContentWrap>
        <InputTitle>????????? ??????</InputTitle>
        <InputWrap>
          <Input type='text' placeholder='test@gmail.com' value={email} onChange={handleEmail}></Input>
        </InputWrap>
        <ErrorMessageWrap>{!emailValid && email.length > 0 && <div>????????? ???????????? ??????????????????.</div>}</ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>????????????</InputTitle>
        <InputWrap>
          <Input type='password' placeholder='??????, ?????? ?????? 8??? ??????' value={pw} onChange={handlePassword}></Input>
        </InputWrap>
        <ErrorMessageWrap>{!pwValid && pw.length > 0 && <div>??????, ?????? ?????? 8??? ?????? ??????????????????.</div>}</ErrorMessageWrap>
      </ContentWrap>
      <ButtonWrap>
        <Button onClick={onClickConfirmButton} disabled={notAllow}>
          ??????
        </Button>
      </ButtonWrap>
      <BottomText>
        ?????? ????????? ???????????????? <Link to='/join'>???????????? ????????????</Link>
      </BottomText>
    </LoginContainer>
  );
}

export default Login;
