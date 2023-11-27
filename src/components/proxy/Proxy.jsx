import React from "react";
import NavigateButton from "../common/buttons/NavigateButton";
import Footer from "../common/Footer";

function Proxy() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary font-urbanist">
      <section className="flex items-center justify-center flex-wrap px-[10px] sm:px-[20px] md:px-[10px] lg:px-[20px] xl:px-[50px] pt-[30px] ">
        <div className="md:w-1/2 flex items-center justify-center space-y-5 text-darkSecondary">
          <div className=" max-[400px]:w-[350px] max-[500px]:w-[400px] sm:w-[500px] bg-secondaryLogin rounded-lg py-10 px-5 sm:px-10 max-[400px]:text-xl min-[400px]:text-2xl drop-shadow-[0_0px_60px_rgba(255,255,255,0.45)]">
            <p className=" font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <NavigateButton text={"Checkout"} customStyle={"mt-5"} />
          </div>
        </div>

        <div>
          <img src="images/home.png" className="w-[594px] h-[500px] sm:h-[664px]" alt="" />
        </div>
      </section>
      <div className="  bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Proxy;
