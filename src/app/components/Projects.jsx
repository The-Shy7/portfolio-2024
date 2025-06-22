import { projectData } from "../utils/project-data";

const Projects = () => {
  return (
    <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-header">
                        <i className="fa-regular fa-folder-open folder-icon"></i>  
                        <div className="small-icons">
                            <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <h3>{project.title}</h3>
                    {project.paragraphOne && (
                        <>
                            <p>{project.paragraphOne}</p>
                            <br />
                        </>
                    )}
                    {project.paragraphTwo && (
                        <>
                            <p>{project.paragraphTwo}</p>
                            <br />
                        </>
                    )}
                    {project.paragraphThree && (
                        <>
                            <p>{project.paragraphThree}</p>
                            <br />
                        </>
                    )}
                </div>
            ))
            }
        </div>
    </div>
  );
}

export default Projects;