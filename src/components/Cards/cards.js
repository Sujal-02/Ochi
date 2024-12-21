import React from 'react'

function cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 '>
            <div className='cardContainer w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5'>&copy;2019-2020</button>
                </div>
            </div>
            <div className='cardContainer w-1/2 h-[50vh] flex gap-5'>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5'>&copy;2019-2020</button>
                </div>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5'>&copy;2019-2020</button>
                </div>
            </div>
        </div>
    )
}

export default cards