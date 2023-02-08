import styled from 'styled-components';
import axios from 'axios';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Job from '../components/Job';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
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
      <Banner />
      <Introduction />
      <Job />
      <Footer />
      <Routes>
        <Route path='/' />
        <Route path='/page-2' />
      </Routes>
    </Container>
  );
};

export default App;
