 
import PublicLayout from './layouts/main';
import Home from './pages/home';
import Contact from './pages/Contact';
import FormaulairePaiement from './pages/formulairePayement';
import Tarif from './pages/Tarif';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/formulairePaiement' element={<FormaulairePaiement />} />
          <Route path='/tarif' element={<Tarif />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
