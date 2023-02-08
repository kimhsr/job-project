import React from 'react';
import styled from 'styled-components';

const FooContainer = styled.div`
  width: 100%;
  background-color: black;
  border-bottom: 1px solid #e5e5e5;
  height: 70px;
`;

function Footer() {
  return <FooContainer></FooContainer>;
}

export default Footer;
