import React, { useRef, useState } from 'react'

export default function NewProject({handleSave, handleCancel}) {
  const [newProjectInput, setNewProjectInput] = useState({
    title: "",
    desc: "",
    date: ""
  })
  function handleChange(e){
    const { id, value } = e.target
    setNewProjectInput(prevVal => {
      return {...prevVal, [id]: value}
    })
  }
  return (
    <div className='flex flex-col py-20 w-3/6 mx-auto'>

        <div className="space-x-7 pb-11 flex">
            <button onClick={handleCancel} className='text-stone-900 border border-white hover:border-stone-400 px-5 py-2 rounded-md ms-auto'>Cancel</button>
            <button onClick={() => handleSave(newProjectInput)} className="p-3 bg-stone-900 text-stone-200 hover:bg-stone-800 hover:text-stone-300 rounded-md px-5 py-2">Save</button>
        </div>

        <label htmlFor="title" className='text-stone-500 font-bold'>TITLE</label>
        <input onChange={handleChange} className='bg-stone-300 outline-none rounded-sm shadow-sm shadow-stone-500 p-1 mb-4 text-stone-500' type="text" id='title' />
        <label htmlFor="desc" className='text-stone-500 font-bold'>DESCRIPTION</label>
        <textarea onChange={handleChange} name="desc" id="desc" cols="30" rows="2" className='bg-stone-300 outline-none resize-none border-b-2 border-stone-800 rounded-sm p-1 mb-4 text-stone-500' autoFocus></textarea>
        <label htmlFor="date" className='text-stone-500 font-bold'>DUE DATE</label>
        <input onChange={handleChange} type="date" id='date' className='bg-stone-300 outline-none rounded-sm shadow-sm shadow-stone-500 p-1 mb-4 text-stone-500'/>
    </div>
  )
}
