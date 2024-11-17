import React from 'react';
import { motion } from "framer-motion"

export const TopAgents = () => {

    const topAgents = [
        {
          id: 1,
          name: "Gbenga",
          company: "New Heights Ltd.",
          number: '01022391273',
          imageUrl: "./images/about-01.jpg",
        },
        {
          id: 2,
          name: "Princess",
          company: "Prime Properties Ltd.",
          number: '06024927152',
          imageUrl: "./images/about-02.jpg",
        },
        {
          id: 3,
          name: "Godfrey",
          company: "Independent Realtor",
          number: '04098746124',
          imageUrl: "./images/about-03.jpg",
        },
    ]

    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">Top Agents</h3>
        <hr className="mb-4"/>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
            {topAgents.map((agent) => (
              <div key={agent.id} className='flex sm:flex-col my-8 ml-8 items-center md:w-2/3 '>
                <img src={agent.imageUrl} alt="real estate agent" />
                <div className='w-full sm:text-center m-6 sm:flex-col sm:justify-center'>
                  <h4 className='text-xl'>{agent.name}</h4>
                  <p className='w-full text-md font-bold text-yellow-500'>{agent.company}</p>
                  <p className='text-gray-500 text-sm'>{agent.number}</p>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    )
}
