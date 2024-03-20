import React from 'react'
import ProjectPrototype from './ProjectPrototype'
export default function Projects({projectsArray, indexOfSide, position, handleProjectDelete}) {
 
  return (
    <>
      {projectsArray.filter((item, index) => index === indexOfSide).map(({ title, desc, date }, index) => {
        return <ProjectPrototype key={index} heading={title} desc={desc} date = {date} position={position} handleProjectDelete={handleProjectDelete}/>
      })}
    </>
  )
}