import React, { useState } from "react";
import NavigateButton from "../common/buttons/NavigateButton";

function LoginComponent() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onchange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    console.log(loginData);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary px-[30px] sm:px-[50px] md:px-[20px] lg:px-[100px] xl:px-[130px] pt-10 font-urbanist">
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className=" grid grid-cols-5 gap-3 items-center justify-center h-[650px]">
        <div className=" col-span-2 ml-10 hidden md:flex flex-col justify-center items-start text-darkSecondary">
          <h1 className=" font-semibold text-4xl my-1.5">Access Dashboard</h1>
          <span className=" flex gap-1 items-center text-2xl">
            <img src="/images/check.png" alt="" />
            <p>Manage your proxy products</p>
          </span>
          <span className=" flex gap-1 items-center text-2xl">
            <img src="/images/check.png" alt="" />
            <p>Access documentation</p>
          </span>
          <span className=" flex gap-1 items-center text-2xl">
            <img src="/images/check.png" alt="" />
            <p>See usage statistics</p>
          </span>
        </div>
        <div className=" col-span-5 md:col-span-3 flex items-center justify-center">
          <div className=" bg-secondaryLogin text-darkSecondary border-none rounded-md drop-shadow-[0_0px_70px_rgba(255,255,255,0.75)] py-14 px-12 w-[500px] mr-10">
            <h1 className=" font-semibold text-2xl">Sign In To Buy Proxies</h1>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="username">Username or email</label>
              <div className="relative p-[2px] rounded-md max-w-sm bg-gradient-to-r from-[#D97EFC] to-[#7200FF]">
                <input
                  className=" w-full bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={onchange}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="password">Password</label>
              <div className="relative p-[2px] rounded-md max-w-sm bg-gradient-to-r from-[#D97EFC] to-[#7200FF]">
                <input
                  className=" w-full bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter password"
                  name="password"
                  onChange={onchange}
                />
                <div
                  onClick={toggleShowPassword}
                  className=" cursor-pointer absolute right-3 top-2"
                >
                  {showPassword ? (
                    <ion-icon name="eye-outline"></ion-icon>
                  ) : (
                    <ion-icon name="eye-off-outline"></ion-icon>
                  )}
                </div>
              </div>
            </div>
            <div className=" mt-7 w-fit h-fit" onClick={onsubmit}>
              <NavigateButton text={"Log in"} href={"#"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
