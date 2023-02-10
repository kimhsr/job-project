import React from 'react';
import styled from 'styled-components';

const InContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 180px;
  text-align: center;
`;

const InText = styled.div`
  line-height: 5.8rem;
  font-size: 1.5rem;
  color: #383838;
`;

const InButton = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #383838;
  text-decoration: none;
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  transform: rotate(0.03deg);
  &:hover {
    background-color: #000;
  }
`;

function Introduction() {
  return (
    <InContainer>
      <InText>구인구직 사이트 잡다입니다</InText>
      <InButton>채용공고</InButton>
    </InContainer>
  );
}

export default Introduction;
