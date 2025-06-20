import React from 'react'
import {motion} from 'framer-motion'
export default function Platforms() {
  return (
    <motion.section id='platforms' className='dm:my-16 sm:my-8 m-4'>
        <div className='flex md:flex-row flex-col justify-around'>
        <div className='flex flex-col'>

            <h1 className='text-5xl font-bold text-center mb-8 text-white'>Platforms</h1>
        <motion.div className="bg-[#141321] shadow-md rounded-xl p-4 max-w-md mx-auto border-2 border-white  border-opacity-50" initial={{scale:1}} whileHover={{scale:1.05}}>
                <h2 className="text-5xl font-bold mb-4 text-center text-[#753314]">LeetCode Stats</h2>
                <img
                    src="https://leetcard.jacoblin.cool/Prakhar_1403?theme=dark&ext=contest"
                    alt="LeetCode"
                    className="mx-auto"
                    />
            </motion.div>
        </div>
            <section className="  text-center">
                <h2 className="text-5xl font-bold text-white mb-6">GitHub Stats</h2>
                
                <div className="flex flex-col  justify-center items-center gap-8">
                    <motion.img
                    src="https://github-readme-stats.vercel.app/api?username=Prakhar140303&show_icons=true&theme=radical"
                    alt="GitHub Stats"
                    className="rounded-xl shadow-lg w-[340px] md:w-[420px] border-2 border-white  border-opacity-50"
                     initial={{scale:1}} whileHover={{scale:1.05}}
                    />

                    <motion.img
                    src="https://streak-stats.demolab.com?user=Prakhar140303&theme=radical"
                    alt="GitHub Streak"
                    className="rounded-xl shadow-lg w-[340px] md:w-[420px] border-2 border-white  border-opacity-50"
                     initial={{scale:1}} whileHover={{scale:1.05}}
                    />
                </div>
                

                <div className="mt-8">
                    <motion.img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Prakhar140303&layout=compact&theme=radical"
                    alt="Top Languages"
                    className="rounded-xl shadow-lg mx-auto w-[320px] md:w-[400px] border-2 border-white  border-opacity-50"
                     initial={{scale:1}} whileHover={{scale:1.05}}
                    />
                </div>
            </section>
        </div>

    </motion.section>
  )
}
