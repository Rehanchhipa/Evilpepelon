'use client'
import React from 'react'

const card = [
  {
    stage: 'Stage 1',
    title: '',
    p:[
      'create ca',
      '.get blocksafu to audit the smart contract',
      'staking pool created & ready for launch to stake your EPE asap',
      'anounce gempad.app presale start date',
      'make mods, admins ready for presale and launch',
      'first callers',
      'youtube video release…..',
      'twitter and coinmarketcap campaigns',
    ]
  },
  {
    stage: 'Stage 2',
    title: 'Major caller/Xtwitter & tiktok influeuncers',
    p:[
      'partnerships with based callers & social media influencers',
      'creation of dapps ongoing,swap,stake,token generator,',
      'realease of first utility…….????? supprise for hype',
      'GEmpad.app launch',
      'trends paid and ready for launch',
      '.launch of evilswap/stake our own swap and staking platform to use and earn and stake your investments and recieve rewards in dogcoin',
      '.fairlaunch complete and liquity added to pancakeswap',

    ]
  },
  {
    stage: 'Stage 3',
    title: 'launch pancakeswap.',
    p:[
      '.Confirmed cex tier 2 listing,fast track coin-gekko listing,',
      '.advanced listings on moontok and other coinvote sites,',
      '.massive marketing campaign across asia and europe',
      '.Confirmed cex tier 2 listing,fast track coin-gekko listing,',
      '.advanced listings on moontok and other coinvote sites,',
      '.massive marketing campaign across asia and europe'
    ]
  },
]





const page = () => {


  return (
    <div className='bg-gray-100'>
      
      <div className="grid grid-cols-1 md:grid-cols-3 mx-6 md:mx-10 lg:mx-32 py-20">
          {
            card.map((v, i) => {
              return (
                <div key={i} className="col-auto shadow-2xl">
                  <div className='bg-gradient-to-t from-blue-300 via-white to-white w-full p-1 md:p-1 lg:p-6 pb-6 md:pb-10 lg:pb-12 h-full' style={{}}>
                    <p className='font-bold text-xl text-center md:text-left'>{v.stage}</p>
                    <div className='bg-blue-700 w-20 sm:w-32 md:w-8 mt-5 mb-6 mx-auto md:mx-0' style={{ height: '3px' }} />
                    <p className='font-bold text-xl text-center md:text-left'>{v.title}</p>
           {         
                      card[i].p.map((value,index) => {
                        return (
                          <p key={index} className='mt-5 text-center md:text-left'>{value}</p>
                          )
                        })
                      }
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default page
