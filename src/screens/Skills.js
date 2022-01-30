import './styles/Skills.css'

const Skills = () => {
    return (
        <div className="skills">
            <h1>Compétences</h1>
            <div className="skillsBlocs">
                <div className="skillsBlocsUp">
                    <div className="skillsBloc">
                        <h3>Front-end</h3>
                        <p>HTML, CSS, Javascript, React</p>
                        
                    </div>
                    <div className="skillsBloc">
                        <h3>Back-end</h3>
                        <p>Javascript, Node, Express, MySQL, Workbench</p>
                    </div>
                </div>
                <div className="skillsBlocsDown">
                    <div className="skillsBloc">
                        <h3>Design</h3>
                        <p>Responsive, Figma, Photoshop</p>
                    </div>
                    <div className="skillsBloc">
                    <h3>Méthodes de travail</h3>
                        <p>Git, Github, Gitbash, Méthodes agiles, SCRUM, Trello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills