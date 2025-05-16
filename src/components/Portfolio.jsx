import {motion} from "framer-motion";
const Portfolio = () => {
    return (
      <motion.section 
      initial={{ opacity: 0 ,y: 80 }}
      whileInView={{ opacity: 1 ,y: 0 }}
      transition={{ duration: 1.2}}
      viewport={{ once: true }}

      
      id="portfolio" className="pt-16 md:p-20 p-4 pt-10 font-inter text-white bg-inherit" >
        <h1 className="text-white text-5xl text-center pb-4">About Me </h1>
        <p>I’m Prakhar Singh Parihar, a passionate Full-Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and a growing expertise in Machine Learning. I specialize in building responsive, user-focused web applications and enjoy crafting seamless digital experiences through clean, scalable code.

Alongside my full-stack work, I’m deeply interested in using real-world data to solve real-world problems. I’ve started integrating Machine Learning into my projects — from predictive models to intelligent features — expanding my ability to deliver smarter, data-driven applications. My goal is to bridge the gap between traditional web development and AI-powered solutions.

I thrive in collaborative environments and love working on projects that challenge my creativity and technical thinking. Whether it's backend architecture, UI design, or training models, I aim to create impactful solutions. When I'm not coding, I’m exploring new tech trends, contributing to open-source, or diving deeper into ML frameworks and algorithms.</p>
      </motion.section>
    ); 
  };
  
  export default Portfolio;