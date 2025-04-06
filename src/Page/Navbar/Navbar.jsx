import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex-row justify-between items-center '>
        
      
      <p className='font-bold text-lg'>Flow State</p>

      <div className='w-full flex justify-between items-center gap-3'>
        <p>Work to do</p>
        <Avatar src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" >J</Avatar>
      </div>

        
    </div>
  )
}

export default Navbar
