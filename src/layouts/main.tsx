import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function App() {
    return (
    <div>
        <div className='  w-full flex items-center justify-center'>
            <Header></Header>
        </div>
        <Outlet />
        <div className=' overflow-hidden z-50 fixed bottom-0 w-full flex'>
            <Footer></Footer>
        </div>

    </div>
    );
  }
  
  
  export default App;