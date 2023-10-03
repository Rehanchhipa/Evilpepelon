import React from 'react'
import Image from 'next/image'
import quoteimg from '../../images/quote-1.webp'
import tokenomics from '../../images/tokenomics.webp'
import { BsCheck } from 'react-icons/bs'

const page = () => {
  return (
    <div>
      
      <div className='text-white h-full text-center py-20 px-6' style={{ backgroundColor: '#0064cc' }}>
          <div className='block my-5 lg:hidden'>
            <Image src={quoteimg} alt="image" className='mx-auto' style={{width:'22%',height:'20%'}} />
          </div>
          <p className='text-2xl md:text-3xl font-bold'>Tokenomics</p>
          {/* <p className='text-1xl md:text-2xl text-black font-bold mt-5'>epepelon swap & stake comming soon</p> */}
          <div className='md:flex justify-center mt-9'>
            <div className='mx-auto my-auto hidden lg:block'>
              <Image src={quoteimg} alt="image" width={94} height={72} />
            </div>
            <ol className='list-style md:w-1/2 lg:w-1/3 m-4' style={{ listStyle: 'none' }}>
              {
                ['contract on launch at gempad.app',
                  'Ca Audited by blocksafu and ? waiting on results of audit',
                  'total supply 100000000',
                  '12% cex tier 2 listing locked before launch',
                  'no tokens for callers or influencers alike ever',
                  '12% staking (locked through gempad 5 years lock will extend for long after a month)',
                  '48% presale in gempad*22% liquity on pancakeswap',
                  'liq will be burnt after a year for transparency',
                  'no air drops',
                  'tax 2/2 to continue future development of our utilitys',
                  '1% reflections in doge coin for holding $%) worth EPE',
                ].map((v, i) => {
                  return (
                    <li key={i} className='flex text-left mt-1' style={{}}>
                      <p>

                        <BsCheck style={{ color: 'white', margin: '10px', fontWeight: 'bolder', fontSize: "20px" }} />
                      </p>
                      <p>{v}</p>
                    </li>
                  )
                })
              }

            </ol>
            <div className=' md:w-1/2 lg:w-1/3 mx-4 my-auto'>
              <Image src={tokenomics} className='w-full h-auto' alt='image' />

            </div>

            <div className='mx-auto hidden lg:block w-32'>

            </div>

          </div>

        </div>

    </div>
  )
}

export default page
