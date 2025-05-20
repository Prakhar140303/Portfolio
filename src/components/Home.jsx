import Typewriter from "typewriter-effect";
const Home = () => {

  const handleScroll = (e, id) => {
    e.preventDefault();                              // stop the native nav
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });     // smooth‑scroll to it
    }
  };
  return (
  
    <section className="min-[50%] w-[50%] flex items-center justify-center  text-white md:pt-16 pt-32">
      <div className="  max-w-3xl text-center">
        <div className="md:min-h-40 min-h-24">

        <Typewriter
        options={{
          autoStart: true,
          loop : true,
          cursor: '__'
          
        }}
        onInit={(typewriter) => {
          typewriter.typeString('<p class="md:text-5xl sm:text-4xl text-3xl">Hi, I’m <span class="text-[#753314]/95"> Prakhar Singh Parihar</span></p>')
          .pauseFor(1500)
          .deleteAll()
          .typeString('<p class="md:text-5xl sm:text-4xl text-3xl">A passionate <span class="text-[#753314]/95">  Developer</span></p>')
          .pauseFor(1500)
          .deleteAll()
          .start();
        }}
        />
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) =>handleScroll(e, 'projects')}
            className="px-6 py-3 bg-[#753314]/95 hover:bg-[#753314]/60 text-white rounded-full shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) =>handleScroll(e, 'contact')}
            className="px-6 py-3 border border-[#753314]/20 bg-[#753314]/20 hover:bg-[#753314]/60 hover:text-gray-900 rounded-full transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
