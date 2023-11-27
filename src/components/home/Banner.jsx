import React from "react";
import NavigateButton from "../common/buttons/NavigateButton";
import Slider from "./slider/Slider";

export default function Banner() {
  return (
    <main className="overflow-x-hidden overflow-y-auto px-[15px] sm:px-[25px] md:px-[100px] lg:px-[50px] font-urbanist">
      <section className="flex items-center justify-center flex-wrap mt-12 xl:mt-0">
        <div className="lg:w-1/2 space-y-5">
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

        <div className="flex items-center justify-center mr-14">
          <img src="images/home.png" className="  h-[300px] w-[400px] sm:w-[494px] sm:h-[564px]" alt="" />
        </div>
      </section>
    </main>
  );
}
