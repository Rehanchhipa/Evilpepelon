import React from 'react'
import Image from 'next/image'
import FooterLogo from '../../images/footerLogo.webp'

const Footer = () => {
  return (
    <>
    <div className='text-center flex justify-center bg-white'>
      <Image src={FooterLogo} width={125} height={39} className='my-5' alt='footer'/>
    </div>
    <div className='text-center bg-black text-white py-10'>
      <p>Copyright © 2023 Evelpepelon Crypto</p>
    </div>
      
    </>
  )
}

export default Footer
