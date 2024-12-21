import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import {motion} from "framer-motion"

function landingPage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex item-end overflow-hidden'>
                            {index === 1 && (
                                <motion.div
                                initial={{width: 0}}
                                animate={{width: "8vw"}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md relative top-[1.2vw]'>
                                    <img className='rounded-md object-cover w-full h-full' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                                </motion.div>
                            )}
                            <h1 className="uppercase text-[9vw] leading-[7vw] font-semibold font-founders-grotesk">
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO",].map((item, index) => (
                    <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-4 py-2 border-[2px] border-zinc-400 rounded-full text-sm'>
                        START THE PROJECT
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full '>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landingPage