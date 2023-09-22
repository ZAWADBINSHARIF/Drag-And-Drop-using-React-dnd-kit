// external import
import { useDroppable } from "@dnd-kit/core"

// internal import
import Box from "./Box"

const BigContainer = ({ boxs }) => {

    const { setNodeRef } = useDroppable({
        id: "Droppable"
    })

    return (
        <div className="BigContainer" ref={setNodeRef}>
            {boxs.map(item => (
                <Box key={item.id} id={item.id} position={item.position} />
            ))}
        </div>
    )
}
export default BigContainer