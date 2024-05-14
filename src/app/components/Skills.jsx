const Skills = () => {
  return (
    <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
            <div className="skill-card python">
                <i className="fa-brands fa-python python-icon"></i>
                <p>Python</p>
            </div>
            <div className="skill-card java">
                <i className="fa-brands fa-java java-icon"></i>
                <p>Java</p>
            </div>
            <div className="skill-card js">
                <i className="fa-brands fa-js-square js-icon"></i>
                <p>JavaScript</p>
            </div>
            <div className="skill-card react">
                <i className="fa-brands fa-react react-icon"></i>
                <p>React</p>
            </div>
            <div className="skill-card sql">
                <i className="fa-solid fa-database sql-icon"></i>
                <p>SQL</p>
            </div>
            <div className="skill-card php">
                <i className="fa-brands fa-php php-icon"></i>
                <p>PHP</p>
            </div>
            <div className="skill-card r-project">
                <i className="fa-brands fa-r-project r-project-icon"></i>
                <p>R</p>
            </div>
            <div className="skill-card kubernetes">
                <i className="fa-solid fa-dharmachakra kubernetes-icon"></i>
                <p>Kubernetes</p>
            </div>
            <div className="skill-card aws">
                <i className="fa-brands fa-aws aws-icon"></i>
                <p>AWS</p>
            </div>
            <div className="skill-card docker">
                <i className="fa-brands fa-docker docker-icon"></i>
                <p>Docker</p>
            </div>
            <div className="skill-card git">
                <i className="fa-brands fa-git git-icon"></i>
                <p>Git</p>
            </div>
            <div className="skill-card linux">
                <i className="fa-brands fa-linux linux-icon"></i>
                <p>Linux</p>
            </div>
        </div>
    </div>
  );
}

export default Skills;