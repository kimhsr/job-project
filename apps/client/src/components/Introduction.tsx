import React from 'react';
import styled from 'styled-components';

const InContainer = styled.div`
  background-color: #e9ebec;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 150px;
  position: relative;
`;

const InText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Introduction() {
  return (
    <InContainer>
      <InText>구인구직 사이트 잡다입니다.</InText>
    </InContainer>
  );
}

export default Introduction;
