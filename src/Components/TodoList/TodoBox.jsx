const TodoBox = ({ id, note, isDragging }) => {
    return (
        <>
            {isDragging && <h4>Dragging</h4>}
            <div className="TodoBox">
                {`${id}: ${note}`}
            </div>
        </>
    )
}
export default TodoBox