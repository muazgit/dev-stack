import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyList from './components/TechnologyList';
import Footer from './components/Footer';

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  return (
    <div>
      <Navbar />
      <Hero />

      <TechnologyList
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
      />

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;
