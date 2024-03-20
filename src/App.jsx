import { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
function App() {
  const [ newProject, setNewProject ] = useState(false)
  const [ editProject, setEditProject ] = useState(false)
  const [ projectsArray, setProjectsArray ] = useState([{
    // Default Member of Array
    title: "Learning React",
    desc: "Learn React from the group up. Start with basics, finish with advanced knowledge.",
    date: "Mar 19, 2024"
  }])
  const [ indexOfSide, setIndexOfSide ] =  useState(0)
  const [ prevEntry, setPrevEntry ] = useState(0)
  function handleNewProject(){
    setNewProject(true)
    setEditProject(false)
  }
  function handleEditProject(index){
    setEditProject(true)
    setNewProject(false)
    setIndexOfSide(index)
    setPrevEntry(index)
  }
  function handleSave(newSave){
    setProjectsArray(prevVal => [...prevVal, newSave].filter((value, index, self) => {
      return self.indexOf(value) === index
    }))
  }
  function handleProjectDelete(){
    const newArray = [...projectsArray].filter((item, index) => {
      return index !== prevEntry
    })
    setProjectsArray(newArray)
    handleCancel()
  }
  function handleCancel(){
    setNewProject(false)
    setEditProject(false)
  }
  return (
    <div className="flex">
      <Sidebar handleNewProject={handleNewProject} handleEditProject={handleEditProject} projectsArray = {projectsArray}/>
      <Mainbar newProject = {newProject} handleNewProject={handleNewProject} editProject={editProject} handleSave={handleSave} handleCancel={handleCancel} projectsArray = {projectsArray} indexOfSide={indexOfSide} handleProjectDelete={handleProjectDelete}/>
    </div>
  );
}

export default App;
