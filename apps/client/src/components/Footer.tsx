import React from 'react';
import styled from 'styled-components';

const FooContainer = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid #e5e5e5;
`;
const FooButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const FooButton = styled.div`
  background-color: #383838;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  margin: 30px;
`;

function Footer() {
  return (
    <FooContainer>
      <FooButtonContainer>
        <FooButton></FooButton>
        <FooButton></FooButton>
        <FooButton></FooButton>
      </FooButtonContainer>
    </FooContainer>
  );
}

export default Footer;
