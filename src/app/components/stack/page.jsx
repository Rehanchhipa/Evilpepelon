import React from 'react'
import { ImTelegram } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'

const page = () => {
  return (
    <div className='bg-blue-700 h-screen ' style={{height:'500px'}}>
      <div className='py-32 md:flex lg:px-32 w-full px-4 md:px-24' style={{}}>

          <div className='bg-white text-black text-left p-4 shadow-2xl shadow-gray-500 border-black border stack' style={{}}>
              <p className='text-2xl font-bold'>EVILPEPELON STAKE</p>
              <p className='text-1xl my-6' style={{ fontWeight: 700, fontSize: '17px' }}>link below to evilpepelon stake</p>
              <button className='bg-blue-700 mb-6 px-9 py-3 text-white'>Stack now</button>
              <div className='text-white flex'>
                <div className='flex justify-center items-center mr-2 cursor-pointer bg-blue-700 hover:bg-black' style={{ borderRadius: '50%', width: '35px', height: '35px' }}>
                  <ImTelegram style={{ fontSize: '' }} />
                </div>
                <div className='flex justify-center items-center mr-2 cursor-pointer bg-blue-700 hover:bg-black' style={{ borderRadius: '50%', width: '35px', height: '35px' }}>
                  <AiOutlineTwitter />
                </div>
                <div className='flex justify-center items-center mr-2 cursor-pointer bg-blue-700 hover:bg-black' style={{ borderRadius: '50%', width: '35px', height: '35px' }}>
                  <GrMail />
                </div>
              </div>
            </div>
      </div>
            
    </div>
  )
}

export default page
