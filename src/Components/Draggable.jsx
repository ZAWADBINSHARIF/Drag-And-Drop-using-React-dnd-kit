// external import
import { useDraggable } from "@dnd-kit/core"
import { CSS } from '@dnd-kit/utilities'
import TodoBox from "./TodoBox";

// internal import
// import TodoBox from "./TodoBox"

const Draggable = (props) => {

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.id,
        data: {
            type: "todoBox"
        }
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        width: "100%",
        height: "60px",
        marginBottom: "16px",
        textAlign: "center",
        cursor: isDragging? "grabbing": "grab"
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} >
            <TodoBox note={props.note} id={props.id} isDragging={isDragging} />
        </div>
    )
}
export default Draggable