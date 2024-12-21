import React from 'react'
import {motion} from "framer-motion"

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-32 rounded-t-3xl bg-[#004D43]'>
      <div className='text text-[25vw] font-founders-grotesk uppercase font-semibold border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
          <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='leading-none pr-10 -mb-[2vw] -mt-[5vw]'>we are ochi </motion.h1>
          <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='leading-none pr-10 -mb-[2vw] -mt-[5vw]'>we are ochi </motion.h1>
      </div>
    </div>
  )
}

export default marquee