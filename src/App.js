import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './constants/protectedRoutes';
import { Homepage, Cms } from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cms' element={<ProtectedRoutes><Cms /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
