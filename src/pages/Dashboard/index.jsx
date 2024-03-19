import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../../Componenets/Layout'
import InputField from '../../Componenets/InputField'

function index() {
  return (
    <div>
      <AdminLayout/>
      <InputField label="FullName" />
      
      
      
      
      
      
      <Outlet />


    </div>
  )
}

export default index
