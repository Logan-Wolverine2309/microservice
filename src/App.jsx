
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/darktheme'
import Navbar from './Page/Navbar/Navbar'
import Home from './Home/Home'
import Auth from './Page/Navbar/Auth/Auth'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from './ReduxToolkit/TaskSlice'
import { getUserProfile } from './ReduxToolkit/AuthSlice'


function App() {
  const user = true;
  const dispatch=useDispatch();
  const { task, auth }=useSelector(store=>store)
  

  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  
return(  
     <ThemeProvider theme={darkTheme}>

    {auth.user? <div>
      <Navbar />
    <Home/> 

    </div>: <Auth /> }
      
      </ThemeProvider>
    
  )
}

export default App
