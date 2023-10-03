'use client'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import quoteimg from '../images/quote-1.webp'
import dapps1img from '../images/Image dapps1.webp'
import dapps2img from '../images/Image dapps2.webp'
import Image from 'next/image'
import bgImage from '../images/homeHide.webp'
import bgImage1 from '../images/AVL(1).webp'
import bgImage2 from '../images/bgimg-2.webp'
import bgImage2new from '../images/bgimg-2new.jpg'
import gamepad from '../images/gamepad.jpg'

const Home1 = () => {
  return (
    <>
        <div className='relative text-white h-auto sm:h-screen ' style={{backgroundPosition:'center',backgroundSize:'center'}}>
          <Image src={bgImage} className='lg:fixed top-0 sticky' alt='image' style={{ width: '100%', height: 'auto', zIndex: -2 }} />

          <div className='absolute bg-Image w-full h-full top-0 'style={{zIndex:-2}}>
            <div className='absolute center w-full mx-auto text-center py-64 ' style={{}}>

              <div className='bg-blue-700 w-16 mx-auto my-8 lg:mt-64' style={{ height: '2px' }} />
              <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-10/12 xl:w-7/12 text-white text-center mx-auto w-10/12' style={{ fontWeight: '700', lineHeight: 1.2 }}>WELCOME TO EVILPEPELON CRYPTO</p>

              <div className='md:flex justify-center mt-6 mb-24'>

                <button className='bg-blue-700 py-4 px-8 text-sm font-bold rounded-full uppercase md:mb-0 md:mr-4'>coinboom listining</button>

                <div className='flex justify-center mt-4 md:mt-0'>
                  <span className='relative rounded-full' style={{ border: '2px solid #0064cc' }}>
                    <button className=' bg-blue-700 opacity-50 py-6 px-24 text-sm font-bold rounded-full uppercase'></button>
                    <p className='absolute center w-full uppercase text-sm font-bold cursor-pointer'>poo coinchart</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-52 bg-Image hidden lg:block'>

        </div>

        <div className='text-white h-full text-center py-10 px-6' style={{ backgroundColor: '#0064cc' }}>
          <div className='block my-5 lg:hidden'>
            <Image src={quoteimg} alt="image" width={75} height={58} className='mx-auto' />
          </div>
          <p className='text-2xl md:text-3xl font-bold'>Most Extensive Swap and fastest Protocol</p>
          <p className='text-1xl md:text-2xl text-black font-bold mt-5'>epepelon swap & stake comming soon</p>
          <div className='md:flex justify-center mt-9'>
            <div className='mx-auto my-auto hidden lg:block'>
              <Image src={quoteimg} alt="image" width={94} height={72} />
            </div>
            <ol className='list-style md:w-1/2 lg:w-1/3' style={{ listStyle: 'none' }}>
              {
                ['Buy/Sell/Swap,all on our own platform with low fees,upto 10 chains',
                  'swap will be available the day of pinksale ending,',
                  'you will be able to swap your tokens from any wallet with ease of connect and sell,',
                  'saving the clog of other websites making it faster for EPE token holders than non token holders',
                  'get the edge on trading and watch this space',
                  'forget the sniper bots',
                ].map((v, i) => {
                  return (
                    <li key={i} className='flex text-left mt-3' style={{}}>
                      <p>

                        <BsCheck style={{ color: 'white', margin: '10px', fontWeight: 'bolder', fontSize: "20px" }} />
                      </p>
                      <p>{v}</p>
                    </li>
                  )
                })
              }

            </ol>
            <ol className='list-style md:w-1/2 lg:w-1/3' style={{ listStyle: 'none' }}>
              {
                [
                  'get ready to blow bsc',
                  'web3 dapp development faster than anyone also cheaper rates with verified and checked individuals and teams game development,token generator,swaps,staking dapps you name it,this will revolountionize webb3 and token development'].map((v, i) => {
                    return (
                      <li key={i} className='flex text-left mt:3' style={{}}>
                        <p>

                          <BsCheck style={{ color: 'white', margin: '10px', fontWeight: 'bolder', fontSize: "20px" }} />
                        </p>
                        <p>{v}</p>
                      </li>
                    )
                  })
              }

            </ol>
            <div className='mx-auto hidden lg:block w-32'>

            </div>

          </div>
          <p className='text-1xl md:text-4xl my-6' style={{ fontWeight: '900' }}>GET READY GAME CHANGER UTILITIES</p>

        </div>

        <div className='bg-gray-100 mx-auto py-10'>
          <p className='text-2xl md:text-4xl text-center my-6 text-blue-600' style={{ fontWeight: '800' }}>DAPPS</p>
          <div className='md:flex justify-evenly'>
            <div className='text-center'>
              <Image src={dapps1img} alt='image' width={128} height={128} className='mx-auto' />
              <h1 className='font-bold my-4' style={{ fontSize: '20px', fontWeight: '700' }}>Token Generator</h1>
            </div>
            <div className='text-center'>
              <Image src={dapps2img} alt='image' width={140} height={140} className='mx-auto' />
              <p className='font-bold my-4' style={{ fontSize: '20px', fontWeight: '700' }}>Swap</p>
            </div>
          </div>

        </div>

        <div className='bg-Image-2 bg-cover bg-center lg:bg-fixed ' style={{}}>

          <div className='bg-Image-blue'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 py-24 lg:px-24">
              <div className="col-auto" >
                <div className='md:border-r-2'>
                  <Image src={bgImage1} alt='image' className='h-auto w-full' style={{ border: '35px solid #0064cc', }} />
                  <div className='text-center px-12 ' style={{ backgroundColor: '#0064cc', height: '300px' }}>
                    <h1 className='text-xl py-4' style={{ color: '#FFF', fontWeight: 800 }}>Our Unique Approach</h1>
                    <p className='' style={{ color: '#E1E1E1' }}>Discover our innovative and creative strategies that make us the leaders in the crypto meme scene. We combine the power of memes with strategic marketing techniques to bring you the best results. Join us and be part of the movement!</p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <Image src={bgImage2} alt='image' className='h-auto w-full' style={{ border: '35px solid #0064cc', }} />
                <div className='text-center px-12 ' style={{ backgroundColor: '#0064cc', height: '300px' }}>
                  <h1 className='text-xl py-4' style={{ color: '#FFF', fontWeight: 800 }}>Reliable and Trustworthy & Based Development team,well connected</h1>
                  <p className='' style={{ color: '#E1E1E1' }}>At EvilPepelon Crypto, we prioritize the trust and satisfaction of our investors. Our dedicated team is committed to providing reliable and trustworthy services to ensure the success of your investments. Join us today and experience the difference!</p>
                </div>
              </div>

            </div>



          </div>
        </div>

        <div className='relative text-white h-auto h-screen lg:bg-fixed bg-center bg-cover bg-no-repeat w-full bg2new' style={{}}>

          <div className='absolut bg-Image w-full h-full top-0'>
            <div className='absolute center w-full mx-auto text-center py-64'>

              <p className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl lg:w-10/12 xl:w-7/12 text-white text-center mx-auto w-10/12' style={{ fontWeight: '700', lineHeight: 1.2 }}>WELCOME TO EVILPEPELON CRYPTO</p>

              <div className='justify-center mt-6  mx-6 md:mx-auto md:w-7/12 xl:w-6/12'>
                <p className='text-1xl md:text-2xl'>Discover the best crypto meme in the market. Join our community and be part of the movement that brings BNB back from the brink. Our reliable team is ready to work with all investors and provide top-notch marketing services on Telegram and Twitter.</p>
                <div className='bg-blue-700 w-16 mx-auto my-8 ' style={{ height: '2px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className='text-white h-full text-center py-10 px-6' style={{ backgroundColor: '#0064cc' }}>
          <div className='block my-5 lg:hidden'>
            <Image src={quoteimg} alt="image" width={75} height={58} className='mx-auto' />
          </div>
          <div className='md:flex justify-center mt-9 mb-8'>
            <div className='mx-auto hidden lg:block'>
              <Image src={quoteimg} alt="image" width={94} height={72} />
            </div>
            <div className='mx-2 md:w-1/2 lg:w-1/3 mt-auto mb-10 md:mb-24' style={{}}>
              <p className='text-left text-2xl' style={{ fontWeight: 700 }}>About EvilPepelon Crypto</p>
              <p className='text-left text-1xl mt-6' style={{ fontWeight: 500 }}>We are the best, the greatest, and the G.O.A.T.S of the crypto meme scene. Our team is ready to market and work the investments of all investors alike. Join us and be part of the revolution.</p>
            </div>
            <div className=' md:w-1/2 lg:w-1/3 mx-2' style={{}}>
              <input type="text" className='text-black p-2 w-full' placeholder='Your Name' style={{ outline: 'none', height: '45px' }} required />
              <input type="text" className='text-black p-2 w-full mt-5' placeholder='Email Address' style={{ outline: 'none', height: '45px' }} required />
              <textarea rows={4} type="text" className='text-black p-2 w-full mt-5' placeholder='Message' style={{ outline: 'none', }} required />
              <div className='flex mt-5'>

                <button className='hover:bg-red-700 bg-red-500 py-4 px-8 text-sm font-bold rounded-full uppercase md:mb-0 md:mr-4' style={{}}>Send message</button>
              </div>
            </div>
            <div className='mx-auto hidden lg:block w-32'>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black py-12">
          <div className="col-auto h-auto ">
            <Image src={gamepad} alt='image' className='w-1/2 h-auto mx-auto' />
          </div>
          <div className="col-auto h-auto mx-auto my-auto">
            <p className='text-4xl text-teal-300' style={{ fontWeight: 800 }}>PRE  SALE</p>
          </div>

        </div>


    </>
  )
}

export default Home1
