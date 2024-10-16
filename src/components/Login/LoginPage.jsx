import React from "react";

function LoginPage() {
  return (
    <div className="Boss h-screen flex justify-center items-center">
      <div className="border-gray-200 border-2 items-center backdrop-blur-md h-[30rem] w-[27rem] left-[35rem] rounded-2xl">
        <form className=" justify-center items-center flex flex-col ">
          <span className=" text-black font-semibold absolute top-10 text-3xl ">
            LOG<span className=" text-red-600 font-extrabold">-IN</span>
          </span>

          <div className=" justify-center items-center flex flex-col relative top-[10rem] ">
            <input
              type="text"
              placeholder="Username"
              className=" w-[25rem] h-[3rem] bg-transparent border-gray-200/30 border-2 rounded-lg outline-none  hover:border-gray-200/80  text-white pl-4"
            />{" "}
            <br /> <br />
            <input
              type="password"
              placeholder="Password"
              className=" w-[25rem] h-[3rem] bg-transparent border-gray-200/30 border-2 rounded-lg outline-none hover:border-gray-200/80 pl-4 "
            />
            <p className="text-black-200 mt-6">
              Forget Password{" "}
              <a
                href="#"
                className=" underline hover:text-purple-600/80 hover:font-semibold"
              >
                Click Here
              </a>
            </p>
            <button className=" relative top-[3rem] border-2 border-gray-200/20 w-[6rem] h-[2.5rem] text-gray-200/60 hover:border-gray-200/80 bg-red-600 hover:text-gray-200/80 rounded-md">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
   
  );
}

export default LoginPage;
