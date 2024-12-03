import { Board } from "../../components/Board";

const ProjectBoard = () => {
  return (
    <div className="page">
      <div className="projects-page-container">
        <h1 className="page-title">My Projects</h1>
        {/* Creat toolbar */}
        {/* <Project/> */}
        <Board />
      </div>
    </div>
  );
};

export default ProjectBoard;
