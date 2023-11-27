import React from "react";
import NavigateButton from "../common/buttons/NavigateButton";
import Slider from "./slider/Slider";

export default function Banner() {
  return (
    <section className="flex items-center justify-center flex-wrap">
      <div className="w-1/2 space-y-5">
        <p className="text-darkSecondary text-[28px] font-semibold leading-tight">
          Use the slider below to customize your data allowance. Slide to your
          desired GB amount and discover the corresponding price per GB
          instantly.
        </p>

        <Slider />

        <NavigateButton
          customStyle="tracking-widest w-[287px]"
          text="BUY NOW"
          href="/buy"
        />
      </div>

      <div>
        <img src="images/home.png" className="w-[494px] h-[564px]" alt="" />
      </div>
    </section>
  );
}
