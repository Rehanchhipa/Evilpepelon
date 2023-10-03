'use client'
import React from 'react'
import Image from 'next/image'
import bgimg from '../../images/bgimg-2.webp'
import bgimg1 from '../../images/homeHide.webp'
import { FaUserTie } from 'react-icons/fa'

const card = [
  {
    title: 'Reliability and Trust',
    discription: 'We prioritize reliability and trust in all our operations, ensuring that our investors can count on us for secure and transparent transactions.'
  },
  {
    title: 'Innovation and Creativity',
    discription: 'We constantly strive for innovation and creativity, pushing the boundaries of the crypto meme scene to bring you unique and exciting investment opportunities.'
  },
  {
    title: 'Community and Collaboration',
    discription: 'We believe in the power of community and collaboration. Join our team and be part of a movement that aims to become the first movers in the crypto market.'
  },
]
const page = () => {
  return (
    <>
      <div className='about-img h-56 md:h-64 lg:h-screen w-full bg-cover bg-center' style={{}}>
        <div className='bg-Image w-full h-full flex justify-center' style={{ alignItems: 'center' }}>
          <p className='text-white text-3xl sm:text-5xl md:text-7xl font-bold'>WHO WE ARE?</p>
        </div>
      </div>

      <div className='bg-gray-100 h-auto w-full pb-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          <div className="col-auto lg:m-12">
            <div className=''>
            <p className='text-2xl text-center sm:text-3xl md:text-4xl md:text-left text-blue-700 font-bold md:pr-12'>ABOUT EVILPEPELON    <span className='lg:block'>CRYPTO</span></p>
            </div>
            <div className='bg-blue-700 w-12 mt-6 mx-auto md:ml-0' style={{ height: '3px' }} />
            <p className='mt-6 md:pr-7 text-center md:text-left text-sm md:text-base'>We are the best, the greatest, and the G.O.A.T.S of the crypto meme scene. Our team is ready to market and work the investments of all investors alike. Join us and be part of the revolution.</p>
            <p className='mt-6 md:pr-6 text-center md:text-left text-sm md:text-base'>Based and experienced team across all feilds of crypto and web3 development,</p>
            <p className='mt-6 md:pr-6 text-center md:text-left text-sm md:text-base'>We strive to hit goals and make a project long lasting for you all to benifit from,</p>
            <p className='mt-6 md:pr-6 text-center md:text-left text-sm md:text-base'>SAFU contract safe development team,</p>
            <p className='mt-6 md:pr-6 text-center md:text-left text-sm md:text-base'>Enjoy the ride and welcome to the Team</p>
          </div>

          <div className="col-auto lg:m-12">
            <Image src={bgimg} alt='image' style={{ boxShadow: '10px 10px 0px 1px rgba(0,0,0,0.07)' }}></Image>
          </div>
        </div>

        {/* <div> */}
        <p className='text-blue-700 text-2xl text-center font-bold mx-6 sm:mx-14 my-4 sm:text-3xl md:text-4xl md:mx-8'>WHAT THE EVILPEPELON TEAM AIM TO BRING FOR THE BSC COMMUNITY.</p>
        {/* </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 mx-6 md:mx-10 lg:mx-32 my-16">
          {
            card.map((v, i) => {
              return (

                <div className="col-auto" key={i}>
                  <div className='bg-gradient-to-t from-blue-300 via-white to-white w-full p-1 md:p-1 lg:p-6 pb-6 md:pb-10 lg:pb-12 minWidth' style={{}}>
                    <p className='font-bold text-xl text-center md:text-left'>{v.title}</p>
                    <div className='bg-blue-700 w-20 sm:w-32 md:w-8 mt-5 mx-auto md:mx-0' style={{ height: '3px' }} />
                    <p className='mt-5 text-center md:text-left'>{v.discription}</p>
                  </div>
                </div>
              )
            })
          }
        </div>


      </div>

      <div className='bg-blue-700 w-full py-8'>
        <div className='lg:w-10/12 m-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-auto flex text-center" style={{ alignItems: 'center' }}>
              <p className='text-lg font-bold text-white mx-6 md:text-left md:text-2xl '>CONNECTED TEAM IN BSC WITH ALL MARKETING RUNNNING NON STOP</p>
          </div>
          <div className="col-auto text-center md:text-left">
            <p className='text-2xl font-bold text-white mt-6 md:mt-0'>OUR TEAM</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">
              {
                [{ name: 'richard petterson tg' }, { name: 'blissy esso tg.' }, { name: 'james delareik tg' }, { name: 'jau leiung tg' }, { name: 'Hazel Watson', job: 'Full Stake Developer', mail: '@Hazelwatson001' }, { name: 'Dizzle', job: 'Community Moderator', mail: '@Sitakiz' }].map((v, i) => {
                  return (
                    <div key={i} className='flex text-white justify-center md:justify-start items-center'>
                      <FaUserTie className='text-4xl mr-4' />
                      <div>
                        <p>{v.name}</p>
                        <p className='text-sm'>{v.job}</p>
                        <p className='text-sm'>{v.mail}</p>
                      </div>

                    </div>
                  )
                })
              }
              <div className="col-auto bg-teal-400"></div>

            </div>
          </div>

        </div>
        </div>
      </div>

    </>
  )
}

export default page
