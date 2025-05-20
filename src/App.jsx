import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Platforms from './components/Platforms';
import Projects from './components/projects';
import Loader from './components/Loader';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay (e.g. asset load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>{isLoading ? <Loader /> :
      <div className='bg-[#1C1000]/95'>
        <Header />
          <main  className="p-12  h-screen w-screen bg-no-repeat bg-center bg-contain overflow-hiddensm:mb-12 mt-16 my-4" 
            style={{
              backgroundImage: "url('../assets/computer_background_transparent.png')",
            }}>
          <div className="  flex flex-col sm:p-4 p-32 items-center justify-center text-center overflow-hidden">
            <Home />
          </div>

        </main>
          <>
          <Portfolio />
          <Education />
          <Skills />
          <Platforms />
          <Projects />
        <Contact />

          </>
      </div>}
    </>
  );
};

export default App;