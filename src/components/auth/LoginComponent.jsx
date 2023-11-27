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
      <div className=" mb-3">
        <img src="/images/logo.png" alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" grid md:grid-cols-5 gap-3 items-center justify-center h-[650px]"
      >
        <div className=" md:col-span-2 ml-10 flex flex-col justify-center items-start text-darkSecondary">
          <h1 className=" font-semibold text-4xl my-4">Access Dashboard</h1>
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
        <div className=" md:col-span-3 flex items-center justify-center">
          <div className=" bg-secondaryLogin text-darkSecondary border-none rounded-md drop-shadow-[0_0px_70px_rgba(255,255,255,0.75)] py-14 px-10 sm:px-12 w-[350px] min-[400px]:w-[350px] sm:w-[500px] md:mr-10">
            <h1 className=" font-semibold text-2xl">Sign In To Buy Proxies</h1>
            <div className=" flex flex-col gap-1 my-4">
              <label htmlFor="username">Username or email</label>
              <div className="relative p-[2px] rounded-md max-w-sm bg-gradient-to-r from-[#D97EFC] to-[#7200FF]">
                <input
                  className=" w-full bg-[#CC77FF] placeholder:text-[#dddddd] focus:outline-none placeholder:font-medium border-none rounded-md py-1.5 px-4"
                  type="text"
                  placeholder="Enter username"
                  name="userName"
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
              <Button
                text={reqState.loading ? "Loading..." : "Login"}
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
