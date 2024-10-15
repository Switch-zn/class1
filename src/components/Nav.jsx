import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    // <div>
    //   <nav className="bg-cyan-400 h-screen ">
    //     <div className="bg-white p-6 shadow-lg flex justify-between items-center">
    //       <img
    //         className=" h-16"
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
    //         ANd9GcTk8iu-Q7a1LmOiYIjcZRjrpybo6uYZ7z8crw&s"
    //         alt=""
    //       />
    //       <ul className=" md:flex hidden cursor-pointer">
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-black-700 shadow-lg hover:text-blue-500 p-2 font-bold "
    //           >
    //             HOME
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-black-700 shadow-lg hover:text-blue-500 p-2 font-bold "
    //           >
    //             ABOUT
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-black-700 shadow-lg hover:text-blue-500 p-2 font-bold "
    //           >
    //             BLOG'S
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-black-700 shadow-lg hover:text-blue-500 p-2 font-bold "
    //           >
    //             CONTACT
    //           </a>
    //         </li>
    //         <button
    //           className=" bg-blue-500 p-2 rounded text-white hover:font-bold shadow-md items-center mx-3
    //         "
    //         >
    //           Get Started
    //         </button>
    //       </ul>
    //       <div className=" md:hidden text-2xl text-black">
    //         <button onClick={() => setIsopen(!isOpen)}>
    //           {isOpen ? <FaTimes /> : <FaBars />}
    //         </button>
    //       </div>
    //     </div>

    //     {isOpen && (
    //       <ul className=" flex-col md:hidden cursor-pointer px-10 items-center">
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-white shadow-lg hover:text-blue-500 p-2 font-bold text-lg "
    //           >
    //             HOME
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-white shadow-lg hover:text-blue-500 p-2 font-bold text-lg "
    //           >
    //             ABOUT
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-white shadow-lg hover:text-blue-500 p-2 font-bold text-lg "
    //           >
    //             BLOG'S
    //           </a>
    //         </li>
    //         <li className=" py-3">
    //           <a
    //             href="#"
    //             className=" duration-500 text-white shadow-lg hover:text-blue-500 p-2 font-bold text-lg "
    //           >
    //             CONTACT
    //           </a>
    //         </li>
    //         <button
    //           className="  bg-blue-500 p-3 rounded text-white hover:font-bold shadow-lg my-3 text-xl
    //         "
    //         >
    //           Get Started
    //         </button>
    //       </ul>
    //     )}

    //     <footer className=" bg-gray-900 text-gray-200 ">
    //       <div className=" container mx-auto py-8 px-10 mt-[40em]">
    //         {/* 1st column */}
    //         <div className=" grid md:grid-cols-12 grid-cols-1 gap-7">
    //           <div className=" lg:col-span-4 col-span-12">
    //             <a href="/">
    //               <img
    //                 className=" h-12"
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8iu-
    //             Q7a1LmOiYIjcZRjrpybo6uYZ7z8crw&s"
    //                 alt=""
    //               />
    //             </a>
    //             <p className=" mt-2">
    //               Lorem ipsum dolor sit amet, consectetur <br />
    //               adipisicing elit. Ab obcaecati itaque enim ipsa <br />
    //               suscipit laudantium veniam explicabo voluptatibus! <br />
    //               Saepe, tenetur?
    //             </p>
    //           </div>
    //           {/* 2nd colum */}
    //           <div className=" lg:col-span-2 md:col-span-4 col-span-12">
    //             <h5 className=" tracking-wide text-gray-100 font-semibold">
    //               Company
    //             </h5>
    //             <ul className=" list-none mt-6 space-y-2">
    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" text-gray-300 hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   About us
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" text-gray-300 hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Services
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" text-gray-300 hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Pricing
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" text-gray-300 hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Blog
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           {/* 3rd column */}
    //           <div className=" lg:col-span-3 md:col-span-4 col-span-12">
    //             <h5 className=" tracking-wide text-gray-100 font-semibold">
    //               Important Links
    //             </h5>
    //             <ul className=" list-none space-y-2 mt-6">
    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Terms of Services
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Privacy Policy
    //                 </a>
    //               </li>

    //               <li>
    //                 <a
    //                   href="#"
    //                   className=" hover:text-gray-400
    //                     transition-all duration-500 ease-in-out"
    //                 >
    //                   Documentations
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className=" col-span-12 md:col-span-4 lg:col-span-3">
    //             <h5 className=" tracking-wide text-gray-100 font-semibold">
    //             Newsletter
    //             </h5>
    //             <p>Sign up and receive the latest tips via email.</p>
    //           <form action="">
    //             <div className=" my-3">
    //             <label htmlFor="email-input">Write your email <span className="text-red-600">
    //             *</span> </label>
    //             <input type="email" id="email-input"
    //             className=" mt-3 w-full py-2 px-3 h-10 bg-transparent
    //             rounded outline-none border border-gray-500 
    //             focus:border-[#FFCDA3] focus:ring-0 
    //             placeholder " />
    //             </div>

    //             <input type="Submit"
    //             className=" py-2 px-5 tracking-wide duration-500 
    //             text-base text-center bg-[#ffcda3] hover:bg-[#d5762e]
    //             border-[#ffcda3] hover:border-[#cd7065] text-black rounded
    //             w-full hover:text-white hover:font-semibold" />
    //           </form>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" border-t border-slate-700">
    //         <div className="md:text-left text-center container mx-auto
    //         py-7 px-6">
    //             <p className=" mb-0">
    //             &copy;
    //             <script>
    //                 document.write(new Date().getFullYear());
    //             </script>
    //             2024: Tailwindsnippets Team
    //             </p>

    //         </div>

    //       </div>
    //     </footer>
    //   </nav>
    // </div>
   <div></div>
  );
};

export default Nav;
