// external import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

// internal import
import App from './App.jsx'
import TodoList from './pages/TodoList.jsx'
import ProjectList from './Components/ProjectList.jsx'
import SimpleDragging from './Components/SimpleDragging/SimpleDragging.jsx'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<ProjectList />} />
      <Route path='/todolist' element={<TodoList />} />
      <Route path='/simple-dragging' element={<SimpleDragging />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
