import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 400px;
`;

function Job() {
  return <JobContainer>구인구직</JobContainer>;
}

export default Job;
