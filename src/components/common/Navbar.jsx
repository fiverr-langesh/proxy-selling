import React from "react";
import NavigateButton from "./buttons/NavigateButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <img width={110} height={42} src="images/logo.png" alt="" />

      <div className="flex items-center space-x-5">
        <NavigateButton text="Login" href="/login" />
        <NavigateButton text="Signup" href="/signup" />
      </div>
    </div>
  );
}
