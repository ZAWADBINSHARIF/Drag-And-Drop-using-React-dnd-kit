// external import
import { useDroppable } from "@dnd-kit/core"

// internal import
import TodoBox from "./TodoBox"

const SecondContainer = (props) => {

    const { isOver, setNodeRef } = useDroppable({
        id: "droppable",
        accept: 'todoBox'
    })

    const style = {
        border: isOver ? "3px solid black   " : null
    }

    return (
        <div className="SecondContainer" ref={setNodeRef} style={style}>
            <h2>Done</h2>
            {props.todos.map(todo => (
                <TodoBox key={todo.id} id={todo.id} note={todo.note} />
            ))}
        </div>
    )
}
export default SecondContainer