import React from 'react'
import Button from './Button'

const ProjectSideScreen = ({selectedProjectId, onStartAddProject, projects, selectedProject}) => {
  return (
    <aside className='w-1/3 bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16 md:w-72 '>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
            let cssClasses = 'text-stone-400 px-2 py-1 rounded-sm hover:bg-stone-800 w-full hover:text-stone-200 text-left my-1'
            if(project.id === selectedProjectId){
                cssClasses+= " bg-stone-800 text-stone-200"
            }else{
                cssClasses+= " text-stone-400"
            }
            return (
            <li key={project.id}>
            <button className={cssClasses} onClick={() => {selectedProject(project.id)}}>{project.title}</button>
        </li>)
        })}
      </ul>
    </aside>
  )
}

export default ProjectSideScreen
