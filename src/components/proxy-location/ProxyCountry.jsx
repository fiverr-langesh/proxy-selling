import React from "react";
import Button from "../common/buttons/Button";

function ProxyCountry({ image, country, number }) {
  return (
    <div className="m-4 flex flex-col justify-center items-center rounded-3xl border-none bg-secondaryLogin w-fit drop-shadow-[0_0px_80px_rgba(255,255,255,0.70)]">
      <div className="p-5 pb-2">
        <img className=" w-[209px] h-[139px]" src={image} alt="" />
        <p className="text-darkSecondary text-center pt-2 font-[500] text-[18px]">
          {number}
        </p>
      </div>
      <Button
        text={country}
        customStyle={
          " w-full h-[50px] text-[18px] font-[500] tracking-widest cursor-default"
        }
      />
    </div>
  );
}

export default ProxyCountry;
