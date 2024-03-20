import React, { useRef } from 'react'

export default function Sidebar({handleNewProject, handleEditProject, projectsArray,}) {

  return (
    <main className="h-screen my-7 ps-7 py-9 pe-20 bg-stone-900  flex flex-col gap-8 w-fit text-white rounded-e-xl">
        <h1><strong>YOUR PROJECTS</strong></h1>
        <button onClick={handleNewProject} className="p-3 bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 rounded-md"><i className="fa-solid fa-plus me-1"></i>Add Project</button>
        {projectsArray.map(({title}, index) => {
          return <button key={index} className="list-none text-stone-400 text-center" onClick={() => handleEditProject(index)}>{title}</button>
        })}
    </main>
  )
}
