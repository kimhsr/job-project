import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostBottom from './PostBottom';
import PostTop from './PostTop';

function Postings() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <PostTop />
            <PostBottom />
          </>
        }></Route>
      ;
    </Routes>
  );
}

export default Postings;
