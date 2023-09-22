// external import
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"

// internal import
import FirstContainer from "../Components/TodoList/FirstContainer"
import SecondContainer from "../Components/TodoList/SecondContainer"

const TodoList = () => {
    const [firstTodos, setFirstTodos] = useState([
        { id: 1, note: "Apple" },
        { id: 2, note: "Mango" },
        { id: 3, note: "Jack Fruit" },
        { id: 4, note: "Ludos" },
        { id: 5, note: "Orange" },
    ])

    const [secondTodos, setSecondTodos] = useState([])

    return (
        <DndContext onDragEnd={handleDragEnd}>

            <FirstContainer todos={firstTodos} />
            <SecondContainer todos={secondTodos} />

        </DndContext>
    )

    function handleDragEnd(event) {
        const { over, active } = event

        if (!over) return

        setSecondTodos(prev => {
            const newTodo = firstTodos.find(item => item.id === active.id)
            return [...prev, newTodo]
        })

        setFirstTodos(prev => {
            const newTodos = prev.filter(item => item.id !== active.id)
            return [...newTodos]
        })
    }
}

export default TodoList