import { Routes, Route } from 'react-router-dom';
import { Home, PlaceToStay } from './pages';
import './App.scss';
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
    </>
  );
}

export default App;
