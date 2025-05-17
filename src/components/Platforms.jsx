import React from 'react'
import {motion} from 'framer-motion'
export default function Platforms() {
  return (
    <motion.section id='platforms' className='dm:my-16 sm:my-8 m-4'>
        <div className='flex md:flex-row flex-col justify-around'>
        <div className='flex flex-col'>

            <h1 className='text-5xl font-bold text-center mb-8 text-[#753314]'>Platforms</h1>
            <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center text-[#753314]">LeetCode Stats</h2>
                <img
                    src="https://leetcard.jacoblin.cool/Prakhar_1403?theme=dark&ext=contest"
                    alt="LeetCode"
                    className="mx-auto"
                    />
            </div>
        </div>
            <section className="  text-center">
                <h2 className="text-5xl font-bold text-[#753314] mb-6">GitHub Stats</h2>
                
                <div className="flex flex-col  justify-center items-center gap-8">
                    <img
                    src="https://github-readme-stats.vercel.app/api?username=Prakhar140303&show_icons=true&theme=radical"
                    alt="GitHub Stats"
                    className="rounded-xl shadow-lg w-[340px] md:w-[420px]"
                    />

                    <img
                    src="https://streak-stats.demolab.com?user=Prakhar140303&theme=radical"
                    alt="GitHub Streak"
                    className="rounded-xl shadow-lg w-[340px] md:w-[420px]"
                    />
                </div>

                <div className="mt-8">
                    <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Prakhar140303&layout=compact&theme=radical"
                    alt="Top Languages"
                    className="rounded-xl shadow-lg mx-auto w-[320px] md:w-[400px]"
                    />
                </div>
            </section>
        </div>

    </motion.section>
  )
}
