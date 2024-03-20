import React from 'react'
import Empty from './Empty'
import NewProject from './NewProject'
import Projects from './Projects'
export default function Mainbar({newProject, handleNewProject, editProject, handleSave, projectsArray, indexOfSide, handleProjectDelete, handleCancel}) {

    if(newProject === true && editProject === false){
        return <NewProject handleSave={handleSave} handleCancel={handleCancel}/>
    }
    if (newProject === false && editProject === false){
        return <Empty handleNewProject={handleNewProject}/>
    }
    if(editProject === true){
        return <Projects projectsArray = {projectsArray} indexOfSide={indexOfSide} handleProjectDelete={handleProjectDelete}/>
    }
}
