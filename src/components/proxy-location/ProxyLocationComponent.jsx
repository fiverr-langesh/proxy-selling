import React from 'react'
import ProxyCountry from './ProxyCountry'

function ProxyLocationComponent() {
  return (
    <div className=' text-darkSecondary px-[30px] sm:px-[100px] md:px-[130px] pt-[10px] pb-24 md:pb-10 lg:pb-24 font-urbanist'>
        <h1 className=' text-center text-4xl font-bold my-14'>Top Residential Proxy locations</h1>
        <div className='flex flex-wrap md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:mx-auto 2xl:w-[1200px] justify-center items-center'>
          <ProxyCountry 
            image={'/images/Flag-North-Korea.png'}
            country={'North Korea'}
          />
          <ProxyCountry 
            image={'/images/Flag-Australia.png'}
            country={'Australia'}
          />
          <ProxyCountry 
            image={'/images/Flag-Pakistan.png'}
            country={'Pakistan'}
          />
          <ProxyCountry 
            image={'/images/Flag-Turkey.png'}
            country={'Turkey'}
          />
          <ProxyCountry 
            image={'/images/Flag-Kenya.png'}
            country={'Kenya'}
          />
          <ProxyCountry 
            image={'/images/Flag-China.png'}
            country={'China'}
          />
          <ProxyCountry 
            image={'/images/Flag-Kuwait.png'}
            country={'Kuwait'}
          />
          <ProxyCountry 
            image={'/images/Flag-Bahrain.png'}
            country={'Bahrain'}
          />
        </div>
    </div>
  )
}

export default ProxyLocationComponent