import { useState } from 'react';
import {Power} from 'lucide-react'
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Platforms from './components/Platforms';

const App = () => {
  const [power ,setPower] = useState(false);
  return (
    <div className='bg-[#1C1000]/95'>
      {power && <Header />}
        <main  className={`  p-12  h-screen w-screen bg-no-repeat bg-center bg-contain overflow-hidden"+ ${power===true ? "sm:mb-12 mt-16 my-4" :""}` }
          style={{
            backgroundImage: "url('/src/assets/computer_background_transparent.png')",
          }}>
        {power &&
        <div className="  flex flex-col items-center justify-center text-center overflow-hidden">
          <Home />
        </div>
        }
        {!power && 
        <div className='flex flex-col items-center '>

          <div className="  flex flex-col  md:pt-28  pt-32 pb-8 h-screen items-center" 
            onClick={()=>setPower(!power)}>
            <Power className='size-24 ' />
            <span className='md:text-5xl sm:text-4xl text-3xl'>Click To Start</span>
          </div>
        </div>

        }
      </main>
      {power && 
        <>
        <Portfolio />
        <Education />
        <Skills />
        <Platforms />
      <Contact />
        </>
      }
    </div>
  );
};

export default App;