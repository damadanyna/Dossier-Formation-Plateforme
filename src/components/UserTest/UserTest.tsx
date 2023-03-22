import { useState } from 'react';
import { UserContext } from './UserContext';
import Child from './Child';
import { Usera } from './user';

function UserTest() {


  

  const user: Usera = {
    id: 1,
    name: 'Lambda',
    password: 'password',
    type: 'simple'
    
  };

  const [usera, setUsera] = useState<Usera | null>(user);

  return (


    <UserContext.Provider value={usera}>
      <div >
        <Child/>
      </div>
    </UserContext.Provider>
  );
}

export default UserTest;
