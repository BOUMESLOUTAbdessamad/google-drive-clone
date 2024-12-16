import React from 'react'
import Image from 'next/image'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
      <section className=' justify-center hidden w-1/2 items-center lg:flex xl:w-2/5 bg-brand p-10 lg:py-0 lg:p-10'>
        <div className='flex max-[800px] max-w-[430px] flex-col jus space-y-12'>
          <Image 
            src="/logo.png" 
            alt='logo' 
            width={128} 
            height={64}
            className='h-auto'
            />
          <div className='space-y-5  text-white'>
            <h1 className='h1'>Manage your files in the best cloud plateform</h1>
            <p className='body-1'> This is the place where you can manage all file types</p>
          </div>
          <Image src="/Illustration.png" width={256} height={256} alt="illu"/>
        </div>
      </section>
      <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:py-0 lg:p-10'>
        <div className='mb-16 lg:hidden'>
          <Image 
            src="/logo.png" 
            alt='logo' 
            width={256} 
            height={84}
            className='h-auto w-[200px] lg:w-[250px]'
            />
        </div>
        {children}
      </section>

    </div>
  )

}

export default Layout