import React from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'

const TaskList = () => {
  return (
    <div className=' w-[67vw]'>
        <div className='space-y-3'>
            </div>

        {
            [1].map((item) => <TaskCard key={item} item={item} />)
        }
      
    </div>
  )
}

export default TaskList
