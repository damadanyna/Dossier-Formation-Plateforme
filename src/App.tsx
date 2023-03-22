import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/main';
import Home from './pages/home';
import Contact from './pages/Contact'
import FormaulairePayement from './pages/formulairePayement';


function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/formulairePayement' element={<FormaulairePayement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
