import { motion } from "framer-motion";
const Education = () => {
  
  return (
    <motion.section id="education" className="py-12 px-4  text-gray-900"
      initial={{ opacity: 0 ,y: 80 }}
      whileInView={{ opacity: 1 ,y: 0 }}
      transition={{ duration: 1.2}}
      viewport={{ once: true }}

    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-[#753314]">Education</h1>

        <div className="space-y-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#753314]">
            <h3 className="text-xl font-semibold">B.Tech, Computer Science</h3>
            <p className="text-sm text-gray-600">Currently Pursuing at Pranveer Singh Institute of Technology</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#753314]/80">
            <h3 className="text-xl font-semibold">12th Grade (CBSE)</h3>
            <p className="text-sm text-gray-600">Guru Nanak Public School</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#753314]/60">
            <h3 className="text-xl font-semibold">10th Grade (CBSE)</h3>
            <p className="text-sm text-gray-600">Dr. PR Wasson Public School</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
