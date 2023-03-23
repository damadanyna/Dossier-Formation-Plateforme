import PublicLayout from './layouts/main';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
