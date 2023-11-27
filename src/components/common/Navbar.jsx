import React from "react";
import NavigateButton from "./buttons/NavigateButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-primary pt-[30px] px-[15px] sm:px-[25px] md:px-[100px] lg:px-[50px ">
      <img width={110} height={42} src="images/logo.png" alt="" />

      <div className="flex items-center space-x-5">
        <NavigateButton
          text="Login"
          href="/login"
          customStyle={" w-[90px] sm:w-[120px]"}
        />
        <NavigateButton
          text="Signup"
          href="/signup"
          customStyle={" w-[90px] sm:w-[120px]"}
        />
      </div>
    </div>
  );
}
