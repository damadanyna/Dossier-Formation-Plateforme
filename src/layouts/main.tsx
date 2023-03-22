import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function App() {
    return (
    <div>
        <div className=' flex items-center justify-center'>
            <Header></Header>
        </div>
        <Outlet />
    </div>
    );
  }
  
  
  export default App;