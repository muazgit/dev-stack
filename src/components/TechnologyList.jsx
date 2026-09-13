import { useEffect, useState } from 'react';
import TechnologyCard from './TechnologyCard';
import YourStack from './YourStack';

function TechnologyList({ selectedStack, setSelectedStack }) {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadTechnologies() {
    try {
      const response = await fetch('/technologies.json');
      const data = await response.json();
      setTechnologies(data);
    } catch (error) {
      console.error('Failed to load technologies:', error);
    } finally {
      setLoading(false);
    }
  }

  loadTechnologies();
}, []);

  if (loading) {
    return (
      <section id="technologies" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-center text-sm text-slate-400">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900">
            Explore the <span className="text-[#d91b7e]">Technologies</span>
          </h2>

          <p className="mt-2 text-[14px] font-normal leading-6 text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Stack */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_288px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map(technology => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="lg:sticky lg:top-24">
            <YourStack
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyList;
