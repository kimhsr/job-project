import styled from 'styled-components';
import axios from 'axios';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

const Container = styled.div`
  background-color: #fff;
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

  return (
    <Container>
      <Nav />
      <Routes>
        <Route path='/' />
        <Route path='/page-2' />
      </Routes>
    </Container>
  );
};

export default App;
