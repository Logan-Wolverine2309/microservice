import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

const Signup = ({togglepanel}) => {
    const [formData, setFormData] = React.useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        role: "",
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
        <h1 className='text-lg font-bold text-center pb-8'>Register</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <TextField
            fullWidth
            label="Fullname"
            name="fullName"
            type="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Enter your full name.....'
            />

            <TextField
            fullWidth
            label="User name"
            name="userName"
            type="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder='Enter your user name.....'
            />

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
            placeholder='create your Password.....'
            />

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
            label="Role"
            name="role"
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
        </Select>
      </FormControl>

        <div>
            <Button fullWidth
            className="custom-button"
            type="submit"
            variant="contained"
            sx={{padding: ".9rem"}}
            >
              Register
            </Button>       
        </div>
        </form>

        <div className="mt-5 flex items-center justify-center gap-2 py-5">
            <span>
                Already have an account? 
                <Button onClick={togglepanel} className='text-blue-500 hover:text-blue-700'>
                     Signup</Button>
            </span>
        </div>


    </div>
  )
}

export default Signup;