import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyList from './components/TechnologyList';

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
    </div>
  );
}

export default App;
