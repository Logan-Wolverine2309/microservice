import { Avatar } from '@mui/material';
import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="h-14 flex justify-between items-center px-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow">
    
      
      {/* Left Side */}
      <div>
        <p className='font-bold text-lg'>Flow State</p>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-2'>
        <p>Work to do</p>
        <Avatar src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
      </div>

    </div>
  );
}

export default Navbar;
