import { useParams } from 'react-router-dom';
import clients from '../data';


const Etudes = () => {
  const {clientname} = useParams();

    const client = clients.find((client) => client.Nom === clientname);

  return (
            <ul>
              <li key={1}>{client.Nom}</li>
              <li key={2}>{client.Titre}</li>
              <li key={3}>{client.Texte}</li>
            </ul>
          )
    }  
 
    

export default Etudes