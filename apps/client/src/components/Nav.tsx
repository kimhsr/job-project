import React from 'react';
import styled from 'styled-components';

const NavbarMain = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #383838;
`;

const Navbar = styled.div`
  height: 70px;
  margin: 0 auto;
  max-width: 71.25rem;
`;

const Logo = styled.div`
  display: inline-block;
  line-height: 4.4rem;
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`;

const Menu = styled.div`
  color: #fff;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  left: 40px;
  padding: 1rem;
  cursor: pointer;
`;

const Login = styled.div`
  color: #fff;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  left: 670px;
  padding: 0.7rem;
  cursor: pointer;
`;

function Nav() {
  return (
    <NavbarMain>
      <Navbar>
        <Logo>JOBDA</Logo>
        <Menu>채용공고</Menu>
        <Menu>커뮤니티</Menu>
        <Login>로그인</Login>
        <Login>회원가입</Login>
      </Navbar>
    </NavbarMain>
  );
}

export default Nav;
