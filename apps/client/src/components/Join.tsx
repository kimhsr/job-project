import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const JoinContainer = styled.div`
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

function Join() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [nickname, setNickname] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const [checkPwValid, setCheckPwValid] = useState('');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    const regex = /^[ㄱ-ㅎ|가-힣|ㅏ-ㅣ|a-z|A-Z|0-9|]{2,16}$/;
    if (regex.test(e.target.value)) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
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

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwConfirmCurrent = e.target.value;
    setConfirmPw(pwConfirmCurrent);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(e.target.value)) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }

    if (pw === pwConfirmCurrent) {
      setCheckPwValid('');
    } else {
      setCheckPwValid('비밀번호를 확인해주세요.');
    }
  };

  useEffect(() => {
    if (emailValid && pwValid && confirmPwValid && nicknameValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid, confirmPwValid, nicknameValid]);

  return (
    <JoinContainer>
      <TitleWrap>회원가입</TitleWrap>
      <ContentWrap>
        <InputTitle>이메일 주소</InputTitle>
        <InputWrap>
          <Input type='text' placeholder='test@gmail.com' value={email} onChange={handleEmail}></Input>
        </InputWrap>
        <ErrorMessageWrap>{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}</ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>닉네임</InputTitle>
        <InputWrap>
          <Input type='text' placeholder='닉네임 입력' value={nickname} onChange={handleNickname}></Input>
        </InputWrap>
        <ErrorMessageWrap>
          {!nicknameValid && nickname.length > 0 && <div>2글자 이상 16글자 이하로 입력해주세요.</div>}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>
        <InputWrap>
          <Input type='password' placeholder='영문, 숫자 포함 8자 이상' value={pw} onChange={handlePassword}></Input>
        </InputWrap>
        <ErrorMessageWrap>{!pwValid && pw.length > 0 && <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>}</ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호 확인</InputTitle>
        <InputWrap>
          <Input
            type='password'
            placeholder='영문, 숫자 포함 8자 이상'
            value={confirmPw}
            onChange={handleConfirmPassword}></Input>
        </InputWrap>
        <ErrorMessageWrap>
          {checkPwValid} {!confirmPwValid && confirmPw.length > 0 && <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>}
        </ErrorMessageWrap>
      </ContentWrap>
      <ButtonWrap>
        <Button disabled={notAllow}>확인</Button>
      </ButtonWrap>
      <BottomText>
        이미 회원이신가요? <Link to='/login'>로그인 하러가기</Link>
      </BottomText>
    </JoinContainer>
  );
}

export default Join;
