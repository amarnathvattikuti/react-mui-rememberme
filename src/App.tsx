import React, { createContext, useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';
import ResponsiveDrawer from './components/navbar';

export const store = createContext();

export default function App() {
  const [token, setToken] = useState(null)
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false)

  const environment = process.env.name;
  console.log("environment is :" + environment)

  return (
    <Container sx={{ maxWidth: "100%" }}>
      <Box sx={{ display: 'flex' }}>
        <store.Provider value={[token, setToken, remember, setRemember]}>
          <BrowserRouter>
             { show ? <ResponsiveDrawer show={show} setShow={setShow}/>: ''}
            <Routes>
              <Route index element={<Authentication/>}/>
              <Route path="/Dashboard" element={<Dashboard show={show} setShow={setShow} />} />
            </Routes>
          </BrowserRouter>
        </store.Provider>
      </Box>
    </Container>
  );
}
