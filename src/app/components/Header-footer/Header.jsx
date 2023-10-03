'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsConeStriped } from 'react-icons/bs'


const Header = () => {
    
    const [select, setSelect] = useState('')
    const router = useRouter()
    const pathname = usePathname()

    useEffect(()=>{

        console.log('use effect',pathname.slice(12))
        setSelect(pathname.slice(12))
    },[pathname])

    // console.log(router.pathname)

    // console.log(select)
    const handlebtn = (v, i) => {
        // setSelect(v)
        const route = v.replace(/\s/g, "")

        if (v === 'Home') {
            router.push('/')
            setNav(false)
        }
        else {

            router.replace(`/components/${route.toLowerCase()}`)
            setNav(false)
        }

    }

    // this is drawer
 const [nav,setNav] = useState(false)
    const openNav = ()=> {
        setNav(true)
      }
      
    const closeNav = () => {    
        setNav(false)
    }

    return (
        <>
            <div className='text-center bg-gray-100 ' style={{ zIndex: 100 }}>

                <div className='flex justify-between xl:w-10/12 ml-auto mr-auto py-2 lg:py-8'>

                    <p className='text-1xl font-bold logo mx-4'>EVELPEPELON <span className='sm:block lg:inline text-left'>CRYPTO</span></p>

                    <div className='hidden lg:block'>

                        <ol className='flex'>
                            {
                                ['Home', 'About', 'Contact', 'Audit', 'Buy', 'Road Map', 'Stack', 'Swap', 'Tokenomics', 'White Paper',].map((v, i) => {
                                    const name = v.toLowerCase().replace(/\s/g, "")
                                    const select1 = select === '' ? 'home' : select

                                    return (

                                        <li key={i} className=''>
                                            <button className='nav me-3 cursor-pointer' onClick={() => handlebtn(v, i)} key={v.length} style={select1 === name ? { color: 'blue' } : {}}>{v}</button>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>

                    <div className='my-auto lg:hidden'>
                        <button className=' sm:border border-blue-500 hover:bg-red-500 mx-4 py-1 w-12 nav-hover ' onClick={openNav} style={nav?{backgroundColor:'red',borderRadius: '6px'}:{borderRadius: '6px'}}>
                            <AiOutlineMenu className='mx-auto  w-12  nav-hover' style={nav ? {color:'white',fontSize:'20px',borderRadius:'3px'} : { fontSize: '20px', color: 'blue' }} />
                        </button>
                    </div>

                </div>
            </div>

            {/* this is drawer */}

            <div className='bg-Image bg-red-500 fixed duration-500 h-screen top-0' onClick={closeNav} style={{width:nav?'100%':'0px',zIndex:1}}>

            </div>
            <div  id="mySidenav" className="sidenav delay-200 duration-500" style={{width:nav?'350px':'0px'}} >
                <div className='flex'>
                <button onClick={closeNav} className=' ml-auto px-4 py-2 m-4 border border-black' style={{borderRadius:'3px'}}>
                    <AiOutlineClose style={{color:'red'}}/>
                    </button>
                </div>
                <div>
                    {
                             <ol className=''>
                             {
                                 ['Home', 'About', 'Contact', 'Audit', 'Buy', 'Road Map', 'Stack', 'Swap', 'Tokenomics', 'White Paper',].map((v, i) => {
                                    const name = v.toLowerCase().replace(/\s/g, "")
                                    const select1 = select === '' ? 'home' : select
                                     return (
 
                                         <li key={i} className=''>
                                             <button className='nav me-3 cursor-pointer w-full text-left mt-6 mx-4 font-bold' onClick={() => handlebtn(v, i)} key={v.length} style={select1 === name ? { color: 'blue' } : {color:'#273171'}}>{v}</button>
                                         </li>
                                     )
                                 })
                             }
                         </ol>
                    }
                </div>
            </div>            

        </>
    )
}

export default Header
