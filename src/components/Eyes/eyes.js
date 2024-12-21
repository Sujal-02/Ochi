import React, { useState, useEffect } from "react";

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let Dx = e.clientX - window.innerWidth / 2;
            let Dy = e.clientY - window.innerHeight / 2;

            let angle = Math.atan2(Dy, Dx) * (180 / Math.PI);

            setRotate(angle-180);
        })
    });

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className="relative h-full w-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 '>
                                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 '>
                                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes