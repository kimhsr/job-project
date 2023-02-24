import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: white;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  height: 700px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: white;
  gap: 20px;
`;

const GridItem = styled.div`
  background-color: white;
  border: 1px solid #cdccc6;
  border-radius: 5px;
`;

function Job() {
  return (
    <JobContainer>
      <GridContainer>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
        <GridItem>채용공고</GridItem>
      </GridContainer>
    </JobContainer>
  );
}

export default Job;
