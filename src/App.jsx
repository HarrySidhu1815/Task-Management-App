import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideScreen from "./components/ProjectSideScreen";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })
  function handleAddTask(text){
    setProjectState(prevState =>{
      const newTask = {
        text: text,
        projectId: projectState.selectedProjectId,
        id: Math.random()
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  function handleDeleteTask(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => 
          task.id !== id)
      }
    })
  }
  function handleStartAddProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  function handleCancelStartProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  function handleDeleteProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => 
          project.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleSelectedtProject(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleAddProject(project){
    setProjectState(prevState =>{
      const newProject = {
        ...project,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

 
  let content = <SelectedProject onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={projectState.projects.find(project => project.id === projectState.selectedProjectId)} onDelete={handleDeleteProject} tasks={projectState.tasks}/>;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelStartProject}/>
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideScreen selectedProjectId={projectState.selectedProjectId} selectedProject={handleSelectedtProject} onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
