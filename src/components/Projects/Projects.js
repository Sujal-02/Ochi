import React, { useState } from 'react'
import {motion, useAnimation} from "framer-motion"
import {Power4} from "gsap/all"

function Projects() {
    const cards = [useAnimation(), useAnimation()]

    const HandleHover= (index)=>{
        cards[index].start({y:"0", opacity: 1});
    }

    const HandleHoverEnd = (index)=>{
        cards[index].start({y:"100%", opacity: 0})
    }

    return (
        <div className='w-full py-[4vw]'>
            <div className='w-full border-b-[2px] px-[4vw] pb-[2vw] border-zinc-700'>
                <h1 className='text-[4vw] font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='w-full px-[4vw] pt-[4vw]'>
                <div className='cards w-full flex gap-10'>
                    <motion.div 
                    onHoverStart={()=>HandleHover(0)} 
                    onHoverEnd={()=>HandleHoverEnd(0)}
                    className="cardcontainer w-1/2 h-[75vh] rounded-lg shadow-lg relative text-white">
                        {/* Title Section */}
                        <h1 className="uppercase tracking-tighter py-4 flex items-center justify-start gap-2 px-4">
                            <div className="h-3 w-3 rounded-full bg-white"></div>
                            FYDE
                        </h1>
                        <h1 className='flex text-[#CDEA68] absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl font-semibold uppercase z-[9]'>
                            {"FYDE".split("").map((item,index)=>(
                                <motion.span 
                                initial={{y: "100%", opacity: 0}} 
                                animate={cards[0]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay:index*0.05}}
                                className='block'>{item}</motion.span>
                            ))}
                        </h1>
                        {/* Image Section */}
                        <div className="w-full h-4/5 overflow-hidden rounded-lg">
                            <img
                                className="w-full h-full bg-cover"
                                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                alt="FYDE"
                            />
                        </div>

                        {/* Tags Section */}
                        <div className="w-full  py-4 flex flex-wrap items-center justify-start gap-3 px-4">
                            {["Brand Template", "Sales Deck", "Social Media Templates"].map(
                                (item, index) => (
                                    <a
                                        key={index}
                                        className="relative group text-sm uppercase border-2 border-white rounded-full px-4 py-2 text-center overflow-hidden z-10 hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        {/* Text */}
                                        <span className="relative z-20">{item}</span>

                                        {/* Circle Effect */}
                                        <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-150 group-hover:-translate-y-4 transition-transform duration-300 ease-in-out z-0"></span>
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>
                    <motion.div 
                    onHoverStart={()=>HandleHover(1)} 
                    onHoverEnd={()=>HandleHoverEnd(1)}
                    className="cardcontainer w-1/2 h-[75vh] rounded-lg shadow-md relative text-white">
                        {/* Title Section */}
                        <h1 className="uppercase tracking-tighter py-4 flex items-center justify-start gap-2 px-4">
                            <div className="h-3 w-3 rounded-full bg-white"></div>
                            VISE
                        </h1>

                        <h1 className='flex text-[#CDEA68] absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl font-semibold uppercase z-[9]'>
                        {"VISE".split("").map((item,index)=>(
                                <motion.span 
                                initial={{y: "100%", opacity: 0}} 
                                animate={cards[1]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay:index*0.05}}
                                className='block'>{item}</motion.span>
                            ))}
                        </h1>

                        {/* Image Section */}
                        <div className="w-full h-4/5 overflow-hidden rounded-lg">
                            <img
                                className="w-full h-full bg-cover"
                                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                alt="VISE"
                            />
                        </div>

                        {/* Tags Section */}
                        <div className="w-full py-4 flex flex-wrap items-center justify-start gap-3 px-4">
                            {["pitch deck"].map(
                                (item, index) => (
                                    <a
                                        key={index}
                                        className="relative group text-sm uppercase border-2 border-white rounded-full px-4 py-2 text-center overflow-hidden z-10 hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        {/* Text */}
                                        <span className="relative z-20">{item}</span>

                                        {/* Circle Effect */}
                                        <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-150 group-hover:-translate-y-4 transition-transform duration-300 ease-in-out z-0"></span>
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Projects