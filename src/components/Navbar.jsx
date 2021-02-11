import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <Link to='/' className='lien'>Home</Link>
      <Link to='/About' className='lien'>L'agence</Link>
      <Link to='/Works' className='lien'>Projets</Link>
    </nav>
  )
}

export default Navbar