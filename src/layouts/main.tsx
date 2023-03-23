import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function App() {
    return (
    <div className='  '>
        <div className=' z-50 fixed top-0 left-0  w-full flex items-center justify-center'>
            <Header></Header>
        </div>
        <div className=' flex '> 
        <Outlet />
        </div>
        <div className=' overflow-hidden z-40 fixed bottom-0 w-full flex'>
            <Footer></Footer>
        </div>

    </div>
    );
  }
  
  
  export default App;