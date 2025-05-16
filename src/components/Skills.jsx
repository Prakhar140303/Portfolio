import {
  SiCplusplus,
  SiPython,
  SiC,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiDaisyui,
  SiMaterialdesign ,
  SiShadcnui
} from 'react-icons/si';
import {motion} from 'framer-motion'
const skills = {
  Languages: [
    { name: 'C++',       icon: SiCplusplus },
    { name: 'Python',    icon: SiPython },
    { name: 'C',         icon: SiC },
    { name: 'JavaScript',icon: SiJavascript },
  ],
  Databases: [
    { name: 'MySQL',     icon: SiMysql },
    { name: 'MongoDB',   icon: SiMongodb },
    { name: 'Firebase',  icon: SiFirebase },
  ],
  'Web & UI': [
    { name: 'Node.js',   icon: SiNodedotjs },
    { name: 'Express',   icon: SiExpress },
    { name: 'React',     icon: SiReact },
    { name: 'Next.js',   icon: SiNextdotjs },
    { name: 'DaisyUI',   icon: SiDaisyui },
    { name: 'Material‑UI', icon: SiMaterialdesign  },
    { name: 'shadcn/ui', icon: SiShadcnui },
  ],
};

export default function Skills() {
  return (
    <motion.section id="skills" className="py-12 bg-[#1C1000]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="sm:text-5xl text-3xl font-bold text-center mb-8 text-white">My Skills</h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {items.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <Icon className="text-4xl text-[#753314] mb-2" />
                  <span className="mt-1 text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
        

    </motion.section>
  );
}
