
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/darktheme'
import Navbar from './Page/Navbar/Navbar'
import Home from './Home/Home'
import Auth from './Page/Navbar/Auth/Auth'
import { useState } from 'react'


function App() {
  const user = true;
return(  
     <ThemeProvider theme={darkTheme}>

    {user? <div>
      <Navbar />
    <Home /> 

    </div>: <Auth /> }
      
      </ThemeProvider>
    
  )
}

export default App
