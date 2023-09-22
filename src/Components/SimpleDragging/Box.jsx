// external import
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

// import import


const Box = ({ id, position }) => {

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        fontSize: "28px",
        cursor: isDragging ? "grabbing" : "grab",
        top: position.y,
        left: position.x,
        border: isDragging ? "2px solid black" : "1px solid black"
    }

    return (
        <div className="Box" style={style} ref={setNodeRef} {...attributes} {...listeners}>
            {`${id}`}
        </div>
    )
}
export default Box