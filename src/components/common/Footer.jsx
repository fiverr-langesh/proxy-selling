import React from 'react'

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-[#D97EFC] to-[#A33CFE] py-3 px-2 sm:px-4 md:px-[75px] lg:px-[90px] xl:px-28 sm:grid grid-cols-5 gap-20 items-center text-darkSecondary w-full drop-shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
      <div>
        <img className="w-[110px] h-[42px]" src="/images/logo.png" alt="" />
      </div>
      <div className=" text-[17px] font-[300] col-span-2 lg:col-span-3 my-4 sm:my-0">
        <p>www.reallygreatsite.com</p>
        <p>www.facebook.com</p>
        <p>www.instagram.com</p>
      </div>
      <div className=" col-span-2 lg:col-span-1 flex flex-col sm:items-end justify-center">
        <h1 className=" text-[18px] font-[700] md:text-base">CONTACT US:</h1>
        <span className="text-[16px] flex items-center gap-1 text-xs">
          <span className=" mt-1">
            <ion-icon name="call"></ion-icon>
          </span>
          <p className='text-[16px] font-[300]'>+93 794 728976</p>
        </span>
        <span className=" flex items-center gap-1 text-xs">
          <span className="text-[16px] mt-1">
            <ion-icon name="mail"></ion-icon>
          </span>
          <p className='text-[16px] font-[300]'>proxysite@gmail.com</p>
        </span>
      </div>
    </div>
  );
}

export default Footer