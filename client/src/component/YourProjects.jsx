import { useContext } from 'react'
import projectContext from '../context/projectContext';
import ProjectItem from './ProjectItem';

const YourProjects = () => {
    const context = useContext(projectContext)
    const { projects, setprojects } = context;
    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-2'>Your Projects</h2>
            <div className='row my-3'>
                {projects.map((project) => {
                    return <ProjectItem project={project} />;
                })}
            </div>
        </div>
    )
}

export default YourProjects