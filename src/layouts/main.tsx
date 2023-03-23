import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function App() {
    return (
    <div className='relative'>
        <div className='z-50 sticky top-0  w-full flex items-center justify-center'>
            <Header></Header>
        </div>
        <div className='flex justify-center items-center'>
            <Outlet />
        </div>
        <Footer></Footer>

    </div>
    );
  }
  
  
  export default App;