import styled from 'styled-components';
import axios from 'axios';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Job from '../components/Job';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Join from '../components/Join';
import LoginJoinNav from '../components/LoginJoinNav';

const Container = styled.div`
  background-color: #fff;
  padding-top: 70px;
`;

export const App = () => {
  const serverUrl = '/api';

  return (
    <Container>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Nav />
              <Banner />
              <Introduction />
              <Job />
              <Footer />
            </>
          }
        />
        <Route path='/page-2' />
        <Route
          path='/login'
          element={
            <>
              <LoginJoinNav />
              <Login />
            </>
          }
        />
        <Route
          path='/join'
          element={
            <>
              <LoginJoinNav />
              <Join />
            </>
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
