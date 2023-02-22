import React from 'react';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import './styles/app.scss';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route 
            path='/:id' 
            element={
              <>
                <Toolbar />
                <SettingBar />
                <Canvas />
              </>
            }
          />
          <Route path='*' element={<Navigate to={`f${(+ new Date).toString(16)}`} />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
};

export default App;