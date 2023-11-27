import React, { useState } from 'react'

function RegisterComponent() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () =>{
    setShowPassword(!showPassword);
  }

  const onchange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    console.log(registerData);
  };

  return (
    <div className=" bg-primary">
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className=" grid grid-cols-5 gap-3 items-center justify-center mt-32">
        <div className=" col-span-2 ml-10 flex flex-col justify-center items-start text-darkSecondary">
          <h1 className=" font-semibold text-2xl">Access Dashboard</h1>
          <span className=" flex gap-1 items-center text-xl">
            <img src="/images/check.png" alt="" />
            <p>Manage your proxy products</p>
          </span>
          <span className=" flex gap-1 items-center text-xl">
            <img src="/images/check.png" alt="" />
            <p>Access documentation</p>
          </span>
          <span className=" flex gap-1 items-center text-xl">
            <img src="/images/check.png" alt="" />
            <p>See usage statistics</p>
          </span>
        </div>
        <div className=" col-span-3 flex items-center justify-center">
          <div className=" bg-secondaryLogin text-darkSecondary border-none rounded-md drop-shadow-[0_0px_20px_rgba(255,255,255,0.55)] py-14 px-12 w-[500px] mr-10">
            <h1 className=" font-semibold text-2xl">Sign In To Buy Proxies</h1>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="username">Username</label>
              <input
                className=" bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={onchange}
              />
            </div>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="email">Email</label>
              <input
                className=" bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={onchange}
              />
            </div>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className=" w-full bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter password"
                  name="password"
                  onChange={onchange}
                />
                <div onClick={toggleShowPassword} className=" cursor-pointer absolute right-3 top-2">
                  {
                    showPassword ? <ion-icon name="eye-outline"></ion-icon> : <ion-icon name="eye-off-outline"></ion-icon>
                  }
                </div>
              </div>
            </div>
            <div className=" mt-7">
              <button
                onClick={onsubmit}
                className=" text-[#f1f1f1] font-semibold border-none rounded-full py-2 px-7 bg-gradient-to-l from-[#7200FF] to-[#D97EFC]"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent