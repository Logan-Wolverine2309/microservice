import React, { use, useEffect } from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../ReduxToolkit/TaskSlice';
import { useLocation } from 'react-router-dom';

const TaskList = () => {
  const dispatch=useDispatch();
  const { task, auth }=useSelector(store=>store)
  const location= useLocation();
  const queryParams= new URLSearchParams(location.search);
  const filterValue= queryParams.get("filter");


  
  useEffect(() => {
    if(auth.user?.role==="ROLE_ADMIN"){
      dispatch(fetchTasks({status: filterValue}));
  } else{
    dispatch(fetchTasks({status: filterValue}));
  
  }}, [filterValue]);

  // console.log("task", task)

  return (
    <div className=' w-[67vw]'>
        <div className='space-y-3'>
            {auth.user?.role === "ROLE_ADMIN"? task.tasks.map((item) => (
            <TaskCard key={item} item={item} />
            )):task.usersTask.map((item) => (
              <TaskCard key={item} item={item} />
            ))};
       </div>
    </div>
  

 )};
export default TaskList;
