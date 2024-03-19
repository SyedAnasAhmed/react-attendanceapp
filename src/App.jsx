import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './Routes/PrivateRoute'
import Authroute from './Routes/AuthRoute'
import { Toaster } from 'react-hot-toast'
import AdminProtectedRoute from './Routes/PrivateRoute'


function App() {


  return (
    <>
      <Routes>

        <Route element={<Authroute />}>
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/" index element={<Login />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
      <div><Toaster/></div>



    </>
  )
}

export default App
