// internal import
import Draggable from "./Draggable"

const FirstContainer = ({ todos }) => {

    return (
        <>
            <div className="FirstContainer">
                <h2>Todo</h2>
                <br/>
                {todos.map(item => (
                    <Draggable key={item.id} id={item.id} note={item.note} />
                ))}
            </div>
        </>
    )
}
export default FirstContainer