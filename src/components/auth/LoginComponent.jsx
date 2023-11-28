import React, { useEffect, useState } from "react";
import Button from "../common/buttons/Button";
import api from "../../utils/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LoginComponent() {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [reqState, setReqState] = useState({
    loading: false,
    error: {
      status: false,
      message: "",
    },
    success: {
      status: false,
      message: "",
    },
  });

  const handleSuccessClose = (event) => {
    setTimeout(() => {
      setReqState({
        ...reqState,
        success: {
          status: false,
          message: "",
        },
      });
    }, 200);

    setReqState({
      ...reqState,
      success: {
        status: false,
        message: reqState.success.message,
      },
    });
  };

  const handleErrorClose = (event) => {
    setTimeout(() => {
      setReqState({
        ...reqState,
        error: {
          status: false,
          message: "",
        },
      });
    }, 200);

    setReqState({
      ...reqState,
      error: {
        status: false,
        message: reqState.error.message,
      },
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onchange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(reqState)
  // },[reqState])

  const handleSubmit = async (e) => {
    console.log(loginData);
    e.preventDefault();

    try {
      const payload = {
        password: loginData.password,
      };

      // check for empty fields
      if (loginData.userName === "" || loginData.password === "") {
        setReqState({
          ...reqState,
          error: {
            status: true,
            message: "Please fill all fields",
          },
        });
        return;
      }

      // check type of user input ( username or email )
      const isEmail = loginData.userName.includes("@");

      console.log(isEmail)

      if (isEmail) {
        payload.email = loginData.userName;
      } else {
        payload.userName = loginData.userName;
      }

      setReqState({
        ...reqState,
        loading: true,
      });

      // send payload to backend
      const res = await api.post("/auth/login", payload);

      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);

        setReqState({
          ...reqState,
          loading: false,
          success: {
            status: true,
            message: "Login successful",
          },
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (err) {
      console.log(err.response?.data.error);

      if (!err.response) {
        setReqState({
          ...reqState,
          loading: false,
          error: {
            status: true,
            message: "Network error",
          },
        });
        return;
      }
      setReqState({
        ...reqState,
        loading: false,
        error: {
          status: true,
          message: err.response?.data.error,
        },
      });
    }

    // setReqState({
    //   ...reqState,
    //   loading: false,
    // });
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary px-[30px] sm:px-[50px] md:px-[20px] lg:px-[100px] xl:px-[130px] pt-10 font-urbanist">
      <a href="/" className="block mb-3">
        <img src="/images/logo.png" className=" w-[110px] h-[42px]" alt="" />
      </a>
      <form
        onSubmit={handleSubmit}
        className=" grid lg:grid-cols-5 gap-3 items-center justify-center h-[560px]"
      >
        <div className=" lg:col-span-2 mb-16 xl:mb-28 ml-10 flex flex-col justify-center items-start text-darkSecondary font-urbanist">
          <h1 className=" font-bold text-[35px] my-4">Access Dashboard</h1>
          <span className=" flex gap-1 items-center text-2xl sm:text-3xl font-medium">
            <img src="/images/check.png" className=" w-[30px] h-[30px]" alt="" />
            <p>Manage your proxy products</p>
          </span>
          <span className=" flex gap-1 items-center text-2xl sm:text-3xl font-medium">
            <img src="/images/check.png" className=" w-[30px] h-[30px]" alt="" />
            <p>Access documentation</p>
          </span>
          <span className=" flex gap-1 items-center text-2xl sm:text-3xl font-medium">
            <img src="/images/check.png" className=" w-[30px] h-[30px]" alt="" />
            <p>See usage statistics</p>
          </span>
        </div>
        <div className="pb-10 lg:pb-0 lg:col-span-3 flex items-center justify-center">
          <div className="  bg-secondaryLogin text-darkSecondary border-none rounded-md drop-shadow-[0_0px_70px_rgba(255,255,255,0.75)] py-14 px-10 sm:px-12 w-[350px] min-[400px]:w-[350px] sm:w-[500px] md:mr-10">
            <h1 className=" font-bold text-[35px]">Sign In To Buy Proxies</h1>
            <div className=" flex flex-col gap-1 my-4">
              <label className=" text-[26px] font-medium" htmlFor="username">
                Username or email
              </label>
                <input
                  id="input-gradient"
                  className="font-sans w-full sm:w-[400px] sm:h-[50px] bg-[#CC77FF] placeholder:text-[#dddddd] placeholder:text-[22px] placeholder:font-medium font-medium text-[22px] focus:outline-none border-none rounded-md py-2 px-4"
                  type="text"
                  placeholder="Enter username"
                  name="userName"
                  onChange={onchange}
                />
            </div>
            <div className=" flex flex-col gap-1 my-4">
              <label className=" text-[26px] font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="input-gradient"
                  className={` font-sans w-full sm:w-[400px] sm:h-[51px] bg-[#CC77FF] placeholder:text-[#dddddd] placeholder:text-[22px] placeholder:font-medium font-medium text-[22px] focus:outline-none border-none rounded-md py-2 px-4`}
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter password"
                  name="password"
                  onChange={onchange}
                />
                
                <div
                  onClick={toggleShowPassword}
                  className="select-none cursor-pointer absolute right-4 top-3 sm:right-4 sm:top-[13px]"
                >
                  {showPassword ? (
                    <span className=" w-fit h-fit relative">
                      <img src="/images/eye.png" className=" w-[27px] h-[27px]" alt="" />
                      <div className=" ml-0.5 h-1 bg-[#3F0077] w-6 absolute top-3 border border-[#3F0077] rounded-full rotate-45"></div>
                    </span>
                  ) : (
                    <img src="/images/eye.png" className=" w-[27px] h-[27px]" alt="" />
                  )}
                </div>
              </div>
            </div>
            <div className=" mt-7 w-fit h-fit" onClick={onsubmit}>
              <Button
                customStyle="sm:w-[255px] sm:h-[64px] sm:rounded-[100px] sm:text-[18px] font-medium tracking-widest"
                text={reqState.loading ? "Loading..." : "Log In"}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>

      <Snackbar
        open={reqState.success.status}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
      >
        <Alert onClose={handleSuccessClose} severity="success">
          {reqState.success.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={reqState.error.status}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error">
          {reqState.error.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default LoginComponent;
