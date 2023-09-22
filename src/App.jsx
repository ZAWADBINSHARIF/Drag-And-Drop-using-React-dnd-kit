// external import
import { Outlet } from "react-router-dom"

// internal import
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>

    </div>
  )
}
export default App