import React from "react";
import Button from "../common/buttons/Button";
import Footer from "../common/Footer";

function Proxy() {
  return (
    <>
      <section className="flex items-center justify-center flex-wrap px-[10px] sm:px-[20px] md:px-[10px] lg:px-[20px] xl:px-[50px] mb-20 font-urbanist">
        <div className="md:w-1/2 flex items-center justify-center space-y-5 text-darkSecondary">
          <div className=" max-[400px]:w-[350px] sm:w-[500px] bg-secondaryLogin rounded-lg py-10 px-5 sm:px-10 max-[400px]:text-lg min-[400px]:text-2xl drop-shadow-[0_0px_70px_rgba(255,255,255,0.75)]">
            <p className=" font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button
              text={"Checkout"}
              customStyle={"mt-5 w-[200px] h-[50px] tracking-widest"}
            />
          </div>
        </div>

        <div className=" flex items-center justify-center mr-14">
          <img
            src="images/home.png"
            className=" h-[400px] w-[494px] md:h-[564px]"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Proxy;
