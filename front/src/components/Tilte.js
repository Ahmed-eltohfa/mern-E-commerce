import React from 'react'

function Tilte(props) {
    return (
        <div className='flex gap-1 text-center items-center justify-center mt-20 text-[25px] md:text-[35px] tracking-wide px-2'>
            <p className='outfit-400 text-gray-400'>{props.title1}</p>
            <p className='outfit-600'>{props.title2}</p>
            <hr className='w-[50px] h-[2px] bg-[#252525]' />
        </div>
    )
}

export default Tilte