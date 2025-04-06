
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/darktheme'
import Navbar from './Page/Navbar/Navbar'
import Home from './Home/Home'


function App() {
return(  
     <ThemeProvider theme={darkTheme}>

     <Navbar />
     <Home />
      
      </ThemeProvider>
    
  )
}

export default App
