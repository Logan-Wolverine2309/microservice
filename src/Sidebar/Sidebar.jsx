import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import "./Sidebar.css"
import { Button } from '@mui/material'
import CreateNewTaskForm from '../Task/CreateTask';


const menu=[
    {name:"Home", value:"Home", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name:"DONE", value:"DONE", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name:"ASSIGNED", value:"ASSIGNED", role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED", value:"PENDING", role:["ROLE_ADMIN"]},
    {name:"Create New Task", value:"", role:["ROLE_ADMIN"]},
    {name:"Notification", value:"NOTIFICATION", role:[ "ROLE_CUSTOMER"]},
];
const role = "ROLE_ADMIN";


const Sidebar = () => {
    const [activeMenu, setActiveMenu]=useState("DONE");
    const [openCreateTaskForm,setOpenCreateTaskForm] =useState(false);
    const handleCloseCreateTaskForm = () => {
      setOpenCreateTaskForm(false);
    };
  
    const handleOpenUpdateTaskModel = () => {
      setOpenCreateTaskForm(true);
    
    };
  
    const handleMenuChange = (item) => {

        if(item.name==="Create New Task"){
            handleOpenUpdateTaskModel();
        }
        setActiveMenu(item.name);
    }
    const handleLogout = () => {
        localStorage.removeItem("user");
        console.log("handleLogout");
    }
  return (
    <>   <div className='card min-h[85vh] flex flex-col justify-center fixed w-[20vw] gap-5'>
    <div className='space-y-6 h-full'>
        <div className='flex justify-center'>
            
            <Avatar 
            sx={{width:"7rem",height:"7rem"}}
            className='border-2 border-[#c24ddd0]'
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ61aOdEt06K7-Bi7CncJrfcUTwAK9vdsww&s"/>
    </div>
        {
            menu.filter((item)=>item.role.includes("ROLE_ADMIN"))
            .map((item)=><p onClick={()=>handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer 
                ${activeMenu===item.name?
                    "activeMenuItem":"menuItem"}`}>
                {item.name}
            </p>)
                
        }
        <Button onClick={handleLogout} sx={{padding:".7rem",borderRadius:"2rem"}}fullWidth className='logoutButton'>
            Logout
        </Button>
    

</div>
</div>
<CreateNewTaskForm open={openCreateTaskForm} hanleClose={handleCloseCreateTaskForm}/>
    </>
 
  )
}


export default Sidebar
