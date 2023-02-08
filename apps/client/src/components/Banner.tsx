import React from 'react';
import styled from 'styled-components';

const BaContainer = styled.div`
  position: relative;
  top: 70px;
  background-color: skyblue;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 370px;
`;

function Banner() {
  return (
    <div>
      <BaContainer>배너이미지</BaContainer>
    </div>
  );
}

export default Banner;
