import React from 'react'
import noProject from "../assets/no-projects.png"
export default function Empty({handleNewProject}) {
  return (
    <div className="flex flex-col py-32 mx-auto text-center gap-6">
      <img src={noProject} alt="no-project" className="w-20 mx-auto" />
      <p className="text-stone-600"><strong>No Project Selected</strong></p>
      <p className="text-stone-600">Select a project or get started with a new one</p>
      <button onClick={handleNewProject} className="p-3 bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-stone-300 rounded-md">Create a new project</button>
    </div>
  )
}
