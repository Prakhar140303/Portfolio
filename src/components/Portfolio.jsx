import {motion} from "framer-motion";
const Portfolio = () => {
    return (
      <motion.section 
      initial={{ opacity: 0 ,y: 80 }}
      whileInView={{ opacity: 1 ,y: 0 }}
      transition={{ duration: 1.2}}
      viewport={{ once: true }}

      
      id="portfolio" className=" md:p-20 p-4 flex md:flex-row flex-col gap-4 justify-between items-center md:items-start font-inter text-white bg-inherit " >
        <div className="flex flex-col  gap-8">
        <h1 className="text-white text-5xl text-center pb-4 bg-inherit/40 ">About Me </h1>
          <p>Fueled by curiosity and a love for building, I craft full-stack applications that are both efficient and intuitive.
              Proficient in React.js, Node.js, and MongoDB, I combine clean code with real-world functionality for seamless experiences.
              Currently expanding into Machine Learning, I’ve solved 1200+ LeetCode problems while integrating intelligent features into my projects.</p>

        </div>
          <div className = "w-48 h-[380px] min-w-48  overflow-hidden">
            <img src="../assets/portfolio.profile.jpg" alt="profile"  className="mb-2 rounded-lg border-4 border-white  border-opacity-50"/>
            <div className="flex flex-row gap-2 items-center justify-center">
              <svg role="img" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://leetcode.com/Prakhar_1403/")} className="size-8 opacity-50 hover:scale-125"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              <svg role="img" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://github.com/Prakhar140303")} className="size-8 opacity-50 hover:scale-125"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" onClick={() => window.open("https://www.linkedin.com/in/prakhar140303/")} className="size-8 opacity-50 hover:scale-125"><path d="M3.986 41.658V6.339c0-1.291 1.049-2.34 2.34-2.34h35.321c1.291 0 2.34 1.049 2.34 2.34v35.319c0 1.291-1.049 2.34-2.34 2.34H6.326C5.035 43.998 3.986 42.949 3.986 41.658zM15.995 37.998V17.999H9.994v19.999H15.995zM24.995 37.998v-11.5c0-1.931 1.569-3.5 3.5-3.5s3.5 1.569 3.5 3.5l-.001 11.499h6.001V24.998c0-3.861-3.139-7-7-7-2.545 0-4.775 1.363-6.001 3.397l.001-3.396h-6.001v19.999H24.995zM15.995 12.998c0-1.656-1.344-3.001-3-3.001s-3 1.345-3 3.001 1.344 3.001 3 3.001S15.995 14.654 15.995 12.998zM7.926 7.934c2.133-.213 5.756-.895 5.713-1.348C13.581 6.006 8.841 5.971 6.93 6.01 6.379 6.049 5.961 6.521 5.995 7.066c0 .019-.004.916-.003.933-.033 2.013.024 5.591.587 5.647C7.031 13.69 7.713 10.067 7.926 7.934zM23.994 47.005c8.836 0 16.008.225 16.008.501 0 .276-7.172.501-16.008.501S7.986 47.782 7.986 47.506C7.986 47.23 15.158 47.005 23.994 47.005z"></path></svg>
            </div>
          </div>
      </motion.section>
    ); 
  };
  
  export default Portfolio;