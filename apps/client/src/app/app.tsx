import styled from 'styled-components';
import axios from 'axios';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Container = styled.div`
  background-color: rgba(128, 128, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;
const Main = styled.div`
  margin: auto;
  text-align: center;
  font-size: large;
`;

export const App = () => {
  const serverUrl = '/api';
  const [helloWorld, setHelloWorld] = useState('Hi WORLD');

  return (
    <Container>
      <Main>{helloWorld}</Main>
      <Routes>
        <Route path='/' />
        <Route path='/page-2' />
      </Routes>
    </Container>
  );
};

export default App;
