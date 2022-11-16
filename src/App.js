import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, PlaceToStay } from './pages';
import styles from './App.scss';
import { Footer, Modal, Navbar } from './components';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => setModalOpen((prev) => !prev);

  return (
    <div className={styles.app}>
      <Modal modalOpen={modalOpen} handleModal={handleModal} />
      <Navbar handleModal={handleModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
