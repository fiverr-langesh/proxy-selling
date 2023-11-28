import React from "react";
import Button from "../common/buttons/Button";

function ProxyCountry({ image, country}) {
  return (
    <div className="m-4 flex flex-col justify-center items-center rounded-3xl border-none bg-secondaryLogin w-fit drop-shadow-[0_0px_80px_rgba(255,255,255,0.70)]">
      <img className="p-5 w-[209px] h-[139px] " src={image} alt="" />
      <Button text={country} customStyle={" w-[220px] h-[50px] text-[18px] font-[500] tracking-widest"} />
    </div>
  );
}

export default ProxyCountry;
