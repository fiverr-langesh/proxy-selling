import React from "react";
import NavigateButton from "../common/buttons/NavigateButton";

function ProxyCountry({ image, country}) {
  return (
    <div className=" rounded-xl border-none bg-secondaryLogin w-fit drop-shadow-[0_0px_80px_rgba(255,255,255,0.70)]">
      <img className="p-3 " src={image} alt="" />
      <NavigateButton text={country} customStyle={"w-full"} />
    </div>
  );
}

export default ProxyCountry;
