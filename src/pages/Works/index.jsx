import clients from '../../data';
import {Link} from 'react-router-dom';

const Works = () => {

  return (
    <div>
      <nav className='nav-client'>
        {clients.map((client) => <Link to={'/Works/'+ client.Nom} className='lien'> {client.Nom} </Link>)}
      </nav>

      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
    </div>
  )
}

export default Works;