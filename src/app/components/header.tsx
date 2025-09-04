import React from 'react'

const header = () => {
  return (
    <div className="flex row justify-between items-center">
        <div className="flex row px-4 py-4 posistion: relative left-10 top-10">
        <p className="text-xl font-bold border-2 rounded-xl px-3 py-3" > Vistors: 1000+ </p>  
        </div>

        <div className="flex row gap-5 rounded-xl px-4 py-4 border-2 position: relative right-15 top-10">
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black' >Home</a>
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black'>About Me</a>
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black' >Projects</a>
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black' >Resume</a>
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black' >Recruiters</a>
        <a href="#" className='text-xl hover:border-1 rounded-xl px-1 py-1 hover:bg-white hover:text-black' >Contact</a>  
        </div>

    </div>
  
  
  )
}

export default header