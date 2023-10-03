import React from 'react'
import { ImTelegram } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'

const page = () => {
  return (
    <div>
      <div className='about-img h-56 md:h-64 lg:h-screen w-full bg-cover bg-center' style={{}}>
        <div className='bg-Image w-full h-full flex justify-center' style={{ alignItems: 'center' }}>
          <p className='text-white text-3xl sm:text-5xl md:text-7xl font-bold'>CONTACT US</p>
        </div>
      </div>

      <div className='text-white h-full text-center py-24 px-6' style={{ backgroundColor: '#0064cc' }}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:w-9/12 m-auto'>
          <div className='col-auto' style={{}}>
            <div className='bg-white text-black text-left p-4'>
              <p className='text-2xl font-bold'>Reach out to us for any inquiries or collaborations</p>
              <p className='text-black-400 text-1xl my-4' style={{ fontWeight: 700, fontSize: '17px' }}>Follow Us</p>
              <div className='text-white flex'>
                <div className='flex justify-center items-center mr-2' style={{ backgroundColor: '#0064cc', borderRadius: '50%', width: '35px', height: '35px' }}>
                  <ImTelegram style={{ fontSize: '' }} />
                </div>
                <div className='flex justify-center items-center mr-2' style={{ backgroundColor: '#0064cc', borderRadius: '50%', width: '35px', height: '35px' }}>
                  <AiOutlineTwitter />
                </div>
                <div className='flex justify-center items-center mr-2' style={{ backgroundColor: '#0064cc', borderRadius: '50%', width: '35px', height: '35px' }}>
                  <GrMail />
                </div>
              </div>
            </div>
          </div>
          <div className='col-auto' style={{}}>
            <input type="text" className='text-black p-2 w-full' placeholder='Your Name' style={{ outline: 'none', height: '45px' }} required />
            <input type="text" className='text-black p-2 w-full mt-5' placeholder='Email Address' style={{ outline: 'none', height: '45px' }} required />
            <textarea rows={4} type="text" className='text-black p-2 w-full mt-5' placeholder='Message' style={{ outline: 'none', }} required />
            <div className='flex mt-5'>
              <button className='hover:bg-red-700 bg-red-500 py-4 px-8 text-sm font-bold rounded-full uppercase md:mb-0 md:mr-4' style={{}}>Send message</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default page
