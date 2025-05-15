import { useState } from 'react';
import {Power} from 'lucide-react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const [power ,setPower] = useState(false);
  return (
    <div className='bg-[#ECB175]'>
      <Header />
        <main  className={"p-12 h-screen w-screen bg-no-repeat bg-center bg-contain "}
          style={{
            backgroundImage: "url('/src/assets/computer_background_transparent.png')",
          }}>
        {power &&
        <div className="  flex flex-col items-center justify-center text-center overflow-hidden">
          <Home />
        </div>
        }
        {!power && 
        <div>

          <div className="  flex  sm:py-200 py-36 justify-center h-screen  text-center overflow-hidden" 
            onClick={()=>setPower(!power)}>
            <Power className='size-24' />
          </div>
          <span>Click To Start</span>
        </div>

        }
      </main>
      {power && 
        <>
        <Portfolio />
        <About />
      <Contact />
        </>
      }
    </div>
  );
};

export default App;