import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/main';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
