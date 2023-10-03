import React from 'react'
import Image from 'next/image'
import SwapImg from '../../images/swap.webp'
import { ImTelegram } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'

const pages = () => {
  return (
    <div>
  <div className='text-white h-full text-center py-32 px-6' style={{ backgroundColor: '#0064cc' }}>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:w-6/12 md:ml-0  lg:ml-auto md:w-7/12 m-auto lg:w-full lg: buy-width'>
          <div className='col-span-2' style={{}}>
            <div className='bg-white text-black text-left p-4 '>
              <p className='text-2xl font-bold'>Evilpepelon swap</p>
              <p className='text-blue-500 text-1xl my-6' style={{ fontWeight: 700, fontSize: '17px' }}>swap your epe tokens here for ease of trading,also swap any other token,10 diffrent chains</p>
              <div className='text-white flex'>
                <div className='flex justify-center items-center mr-2 cursor-pointer bg-blue-700 hover:bg-black' style={{ borderRadius: '50%', width: '35px', height: '35px' }}>
                  <ImTelegram />
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
          <div className='col-auto w-10/12 lg:w-full' style={{}}>
            <Image src={SwapImg} alt='image' className='w-full h-full' priority="true"/>
          </div>
        </div>
      </div>    </div>
  )
}

export default pages
