// external import
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <AiOutlineHome size={36} />
      </Link>
    </header>
  )
}
export default Header