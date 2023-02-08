import React from 'react';
import styled from 'styled-components';

const NavbarMain = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;

const Navbar = styled.div`
  display: flex;
  height: 70px;
  margin: 0 auto;
  max-width: 71.25rem;
  justify-content: space-between;
`;

const Logo = styled.div`
  line-height: 4.4rem;
  font-weight: 700;
  font-size: 2rem;
  color: #383838;
  cursor: pointer;
`;

const MenuLists = styled.ul`
  color: #383838;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  cursor: pointer;
  gap: 30px;
  align-items: center;
  padding: 0;
`;

const MenuTtem = styled.div``;

function Nav() {
  return (
    <>
      <NavbarMain>
        <Navbar>
          <MenuLists>
            <Logo>JOBDA</Logo>
            <MenuTtem>채용공고</MenuTtem>
            <MenuTtem>커뮤니티</MenuTtem>
          </MenuLists>
          <MenuLists>
            <MenuTtem>로그인</MenuTtem>
            <MenuTtem>회원가입</MenuTtem>
          </MenuLists>
        </Navbar>
      </NavbarMain>
    </>
  );
}

export default Nav;
