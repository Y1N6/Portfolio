import "./styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Compétences</h1>
      <div className="skillsBlocs">
        <div className="skillsBlocsUp">
          <div className="skillsBloc">
            <h2>Front-end</h2>
            <p>HTML, CSS, Javascript, React</p>
          </div>
          <div className="skillsBloc">
            <h2>Back-end</h2>
            <p>Javascript, Node, Express, MySQL, Workbench</p>
          </div>
        </div>
        <div className="skillsBlocsDown">
          <div className="skillsBloc">
            <h2>Design</h2>
            <p>UX, UI, Responsive, Figma, Photoshop</p>
          </div>
          <div className="skillsBloc">
            <h2>Méthodes de travail</h2>
            <p>Git, Github, Gitbash, Méthodes agiles, SCRUM, Trello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
