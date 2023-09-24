// external import
import { DndContext, MouseSensor, TouchSensor, useSensor } from "@dnd-kit/core"

// internal import
import BigContainer from "../Components/SimpleDragging/BigContainer"
import { useState } from "react"

const SimpleDragging = () => {

  const [boxs, setBoxs] = useState([
    {
      id: 1,
      position: {
        x: 16,
        y: 16
      }
    },
    {
      id: 2,
      position: {
        x: 250,
        y: 16
      }
    },
    {
      id: 3,
      position: {
        x: 500,
        y: 16
      }
    },
    {
      id: 4,
      position: {
        x: 750,
        y: 16
      }
    }
  ])

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      tolerance: 5
    }
  })

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={[touchSensor, mouseSensor]}
    >
      <BigContainer boxs={boxs} />
    </DndContext>
  )

  function handleDragEnd(event) {
    const { over, active, delta } = event
    const { x, y } = delta

    if (!over) return
    if (over.id !== 'Droppable') return

    setBoxs(prev => {
      const found = prev.find(item => item.id === active.id)

      if (!found) return [...prev]

      const { x: old_x, y: old_y } = found.position
      const filtered = prev.filter(item => item.id !== active.id)
      const newBoxPosition = {
        id: active.id,
        position: {
          x: old_x + x,
          y: old_y + y
        }
      }

      return [...filtered, newBoxPosition]
    })
  }

}
export default SimpleDragging