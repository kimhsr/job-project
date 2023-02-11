import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledLink } from './StyledLink';

const NavContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;

const Navbar = styled.div`
  height: 70px;
  margin: 0 auto;
  max-width: 71.25rem;
`;

const Logo = styled.div`
  line-height: 4.4rem;
  font-weight: 700;
  font-size: 2rem;
  color: #383838;
  cursor: pointer;
  text-align: center;
`;

function LoginJoinNav() {
  return (
    <NavContainer>
      <Navbar>
        <StyledLink to='/'>
          <Logo>JOBDA</Logo>
        </StyledLink>
      </Navbar>
    </NavContainer>
  );
}

export default LoginJoinNav;
