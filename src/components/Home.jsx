import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section className="min-[50%] w-[50%] flex items-center justify-center  text-white md:pt-16 pt-32">
      <div className="max-w-3xl text-center">
        <Typewriter
        options={{
          autoStart: true,
          loop : true,
          cursor: '_'
          
        }}
        onInit={(typewriter) => {
          typewriter.typeString('<p class="sm:text-5xl text-3xl">Hi, I’m <span class="text-[#753314]/70"> Prakhar Singh Parihar</span></p>')
          .pauseFor(1500)
          .deleteAll()
          .typeString('<p class="sm:text-5xl text-3xl">A passionate <span class="text-[#753314]/70"> Full-Stack Developer</span></p>')
          .pauseFor(1500)
          .deleteAll()
          .start();
        }}
        />
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#753314]/90 hover:bg-[#753314]/60 text-white rounded-full shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="prakharsingh130303@email.com"
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
