// external import
import { Link } from "react-router-dom"

// internal import
import TodoBox from "./TodoList/TodoBox"


const ProjectList = () => {

    const projects = [
        {
            name: "Todo List",
            link: "/todolist"
        },
        {
            name: "Todo List",
            link: "/todolist"
        }
    ]

    return (
        <div className="ProjectList">
            <h2>Project List</h2>
            <br/>
            {projects.map((project, index) => (
                <Link key={index} to={project.link}>
                    <TodoBox id={index + 1} note={project.name} />
                </Link>
            ))}
        </div>
    )
}
export default ProjectList