import React, { useRef, useState } from 'react'
import Tasks from './Tasks'
export default function ProjectPrototype({heading, subheading, desc, date, handleProjectDelete}) {
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [ input, setInput ] = useState()
    const [ newTasks, setNewTasks ] = useState(["Learn advanced Concepts", "Learn the basics"])
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSetTask(){
        setNewTasks(prevVal => [input, ...prevVal])
    }
    function handleDelete(position){
        const newArray = [...newTasks].filter((item, index) => {
            return index !== position
        })
        setNewTasks(newArray)
    }
  return (
    <div className='flex flex-col py-20 w-3/6 ms-20 space-y-4 text-stone-700 font-medium'>
        <div className='flex'>
            <h1 className='text-stone-700 font-bold text-3xl'>{heading}</h1>
            <button onClick={handleProjectDelete} className='text-stone-900 border border-white hover:bg-red-900 hover:text-white px-5 py-2 rounded-md ms-auto'>Delete</button>
        </div>
        <div className='text-stone-400'>
            { 
                date ? 
                `${date}`
                : 
                `${months[new Date().getMonth()].slice(0, 3)} ${new Date().getDate()}, ${new Date().getFullYear()}`
            }
        </div>
        <p>{subheading}</p>
        <p className='border-b-2 pb-5'>{desc}</p>
        <ul/>
        <h2 className='text-stone-700 font-bold text-2xl'>Tasks</h2>
        <form className='space-x-4' onSubmit={(e) => e.preventDefault()}>
            <input onChange={handleChange} type="text" name='task' className='bg-stone-300 outline-none rounded-sm border-stone-300 hover:border-stone-500 p-1 mb-4 text-stone-500 border focus:border-blue-800'/>
            <button onClick={handleSetTask} className='text-stone-900 border border-white hover:border-stone-400 px-5 py-2 rounded-md ms-auto'>Add Task</button>
        </form>
        <ul className='bg-stone-200 flex flex-col py-2 text-stone-600'>
            {newTasks.filter((item) => item !== undefined).map((item, index) => {
                return <Tasks position={index} title={item} handleDelete={handleDelete}/>
            })}
        </ul>
    </div>
  )
}