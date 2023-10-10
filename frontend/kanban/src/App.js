import './App.css';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Homepage } from './components/Homepage';
import React, { useState, useEffect } from 'react';


function App() {
  const theme = extendTheme({
    palette:{mode:"dark"},
  });
  return(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <div className='App'>
        { <Routes>
           <Route path='/home' element={<Homepage />} />
          </Routes>
        }
      </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
