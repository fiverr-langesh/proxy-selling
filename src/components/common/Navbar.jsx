import React, { useEffect, useState } from "react";
import NavigateButton from "./buttons/NavigateButton";
import Button from "./buttons/Button";

export default function Navbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setToken(token);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <div className="flex items-center justify-between bg-primary pt-[30px] px-[15px] sm:px-[25px] md:px-[100px] lg:px-[50px ">
      <img width={110} height={42} src="images/logo.png" alt="" />

      <div className="flex items-center space-x-5">
        {
          token ? (
            <>
              <Button
                customStyle="tracking-widest"
                text="Logout"
                href="/dashboard"
                onClick={logout}
              />
             
            </>
          ) : (
            <>
              <NavigateButton
                customStyle="tracking-widest"
                text="Login"
                href="/login"
              />
              <NavigateButton
                customStyle="tracking-widest"
                text="Register"
                href="/register"
              />
            </>
          )
       }
      </div>
    </div>
  );
}
