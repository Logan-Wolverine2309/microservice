import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Signin = ({togglepanel}) => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formData);
    }

  return (
    <div>
        <h1 className='text-lg font-bold text-center pb-8'>Signin</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email.....'
            />

<TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your Password.....'
            />

        <div>
            <Button fullWidth
            className="custom-button"
            type="submit"
            variant="contained"
            sx={{padding: ".9rem"}}>
              Login
            </Button>       
        </div>
        </form>

        <div className="mt-5 flex items-center justify-center gap-2 py-5">
            <span>
                Don't have an account? 
                <Button onClick={togglepanel} className='text-blue-500 hover:text-blue-700'>
                     Signup</Button>
            </span>
        </div>


    </div>
  )
}

export default Signin;