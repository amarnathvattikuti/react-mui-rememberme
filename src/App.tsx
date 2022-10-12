import React, { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Authentication from './components/Authentication'
import Dashboard from './components/Dashboard'
import ResponsiveDrawer from './components/navbar'

interface ContextObj {
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
  remember: boolean
  setRemember: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const contextObjDefaultValue: ContextObj = {
  token: '',
  setToken: () => '',
  remember: false,
  setRemember: () => false,
  show: false,
  setShow: () => false,
}
export const store = createContext(contextObjDefaultValue)

export default function App() {
  const [token, setToken] = useState<string | ''>('')
  const [show, setShow] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)
  const values = { token, setToken, remember, setRemember, show, setShow }

  const environment = process.env.NODE_ENV
  console.log('environment is :' + environment)

  return (
    <Container sx={{ maxWidth: '100%' }}>
      <Box sx={{ display: 'flex' }}>
        <store.Provider value={values}>
          <BrowserRouter>
            {show ? <ResponsiveDrawer /> : ''}
            <Routes>
              <Route index element={<Authentication />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </store.Provider>
      </Box>
    </Container>
  )
}
