import React from 'react'
import {motion} from "framer-motion"

function about() {
    return (
        <div className='w-full pt-[4vw] bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className="font-['Neue Montreal'] px-[2vw] text-[4vw] leading-[4vw] tracking-tight">
                Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-[0.5vw] mt-[4vw] px-[2vw] border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-[4vw]'>Our Approach:</h1>
                    <button className='flex items-center gap-10 uppercase px-[2vw] py-[1vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white'>
                        Read more
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 my-[2vw] h-auto'>
                    <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt="Random from Picsum" className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default about