import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import "./Sidebar.css"
import { Button } from '@mui/material'
import CreateNewTaskForm from '../Task/CreateTask';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const menu = [
    { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
    { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
    { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];


const role = "ROLE_ADMIN";

const Sidebar = () => {
    const location=useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState("DONE");
    const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);

    const handleCloseCreateTaskForm = () => {
        setOpenCreateTaskForm(false);
    };

    const handleOpenUpdateTaskModel = () => {
        setOpenCreateTaskForm(true);
    };

    const handleMenuChange = (item) => {
        const updatedParams = new URLSearchParams(location.search);

        if (item.name === "Create New Task") {
            handleOpenUpdateTaskModel();
        }
        
        else if(item.name=="Home"){
                updatedParams.delete("filter");
                const queryString = updatedParams.toString();
                const updatedPath = queryString ? `${location.pathname}?${queryString}` : 
                location.pathname;
            navigate(updatedPath);
        }
        else{
            updatedParams.set("filter",item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`);
        }
        setActiveMenu(item.name);
    };

    const handleLogout = () => {
        dispatch(logout());
        console.log("handle Logout");
    };

    return (
        <>
            <div className='card min-h[85vh] flex flex-col justify-between-center fixed w-[20vw] top-1/12 left-15 p-4 gap-5'>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '1.5rem' }}>  
                    <div className='flex justify-center'>

                        <Avatar
                            sx={{ width: "8rem", height: "8rem" }}
                            className='border-2 border-[#c24dd0]'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ61aOdEt06K7-Bi7CncJrfcUTwAK9vdsww&s"
                        />
                    </div>
                    {
                        menu.filter((item) => item.role.includes("ROLE_ADMIN"))
                            .map((item) => (
                                <p
                                    key={item.name} 
                                    onClick={() => handleMenuChange(item)}
                                    className={`py-4 px-6 rounded-full text-center cursor-pointer 
                                        ${activeMenu === item.name? "activeMenuItem" : "menuItem"}`}
                                >
                                    {item.name}
                                </p>
                            ))
                    }
                    <Button
                        onClick={handleLogout}
                        sx={{ padding: ".1rem", borderRadius: "2rem" }}
                        fullWidth
                        className='logoutButton'
                    >
                        Logout
                    </Button>
                </div>
            </div>
            <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm} /> {/* Fixed prop name */}
        </>
    );
};

export default Sidebar;