import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function App() {
    return (
    <div>
        <div className=' flex items-center justify-center'>
            <Header></Header>
        </div>
        <Outlet />
        <div className=' flex'>
            <Footer></Footer>
        </div>

    </div>
    );
  }
  
  
  export default App;