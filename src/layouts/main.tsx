import { Outlet } from 'react-router-dom';

function App() {
    return (
    <div>
        <div className='p-5 border-b flex items-center justify-center'>
            <span> Eto no misy an'ilay header </span>
        </div>
        <Outlet />
    </div>
    );
  }
  
  
  export default App;