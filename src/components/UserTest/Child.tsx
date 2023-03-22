import {  useContext } from 'react';
import { UserContext } from './UserContext';

function Child() {
    /* appel variable usera globale */
    const user = useContext(UserContext);
    
    return (
      <>
        {user ? (
          
            user.type === 'admin' ?(
                                        <div>Contenu admin</div>
            ) : 
            user.type ==='simple' ?(
                                        <div>Contenu simple</div>
            ) : (
                                        <div>Sans connexion</div>
            ) ) : (
                                        <div>Sans connexion</div>
        )}
      </>
    );
  }

  export default Child;