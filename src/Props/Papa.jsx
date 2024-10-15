import React, { useState } from "react";
import Pikin from "./Pikin";
import { FaBars, FaTimes } from "react-icons/fa";

const Papa = () => {
  const [Isopen, setIsopen] = useState(false);
  return (
    // <div>
    //   <div>
    //     <nav className=" md:justify-between md:flex md:items-center bg-sky-500 p-2 ">
    //       <div className="flex animate-pulse">
    //         <span className=" text-white shadow- text-center font-semibold">
    //           <img
    //             className="h-11"
    //             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAA
    //           AmVBMVEX///8NIk8AAD4AAEIAAD0AAEAAHUwAGEoAG0sAGksAADsJIE4AAEMAE0gAFkkAEUcAC0W7v
    //           8iAhpkACkXKzdTk5umYnazZ2+Hd3+Ty8/WRlqZGUXCfo7G1uMKKkKFhaoIuPGFRW3dsdYrFx9B4gJQ5R
    //           mdQWnf09fbQ09issbxud4wnNV05RWgdLVcSJlJlboUAADJZYn2lq7nnQT+uAAAP7ElEQVR4nO1daXeq
    //           PBetDIqgggNax9rRodW+9v//uFdNgB1ISFBQ77OyP9y1rlpNcnKmfU7C05OGhoaGhoaGhoaGhoaGhoaGhoaGhoa
    //           GhoaGhoaGhoaGxn8Oq+f1++ZvNjxitukORuN7D6hEPM8nvz8t17BNsx+c0DdN03at3aG3+ecnunpfTJuG6X
    //           fqtSzqDd80+suPeXjvYV6K0XBqmb7jcSaH82yb7nfv/d6DLY7nxc4IZLOLZ+mb/ts/NcnxbOn6vI0phtexn
    //           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
    //           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
    //           8XHy+v08/Nz+nXYLoabweO6dQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NC/F/ScT2BndvE+UAAAAASUVORK5CYII="
    //             alt=""
    //           />
    //           Szn
    //         </span>
    //       </div>

    //       <ul
    //         className=" md:flex text-xl hidden  cursor-pointer
    //                 gap-5"
    //       >
    //         <li>
    //           <a
    //             className=" hover:text-gray-200 duration-500 py-4 text-center"
    //             href="#"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className=" hover:text-gray-200 duration-500 py-4 text-center"
    //             href="#"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className=" hover:text-gray-200 duration-500 py-4 text-center"
    //             href="#"
    //           >
    //             Blog
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className=" hover:text-gray-200 duration-500 py-4 text-center"
    //             href="#"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //       <div className=" text-white px-2 text-2xl md:hidden">
    //         <button onClick={() => setIsopen(!Isopen)}>
    //           {Isopen ? <FaTimes /> : <FaBars />}
    //         </button>
    //       </div>

    //       {Isopen && (
    //         <ul className=" text-xl md:flex-col md:hidden">
    //           <li>
    //             <a
    //               className=" hover:text-gray-200 duration-500 py-4 text-center"
    //               href="#"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className=" hover:text-gray-200 duration-500 py-4 text-center"
    //               href="#"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className=" hover:text-gray-200 duration-500 py-4 text-center"
    //               href="#"
    //             >
    //               Blog
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className=" hover:text-gray-200 duration-500 py-4 text-center"
    //               href="#"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       )}
    //     </nav>
    //   </div>

    //   <Pikin
    //     Surname="Emmanuel"
    //     Firstname="Jn"
    //     Middlename="-"
    //     Age={30}
    //     Gender="Male"
    //     Status="Single"
    //     YearsOfService={5}
    //     IsAmin={true ? "Yes" : "No"}
    //   />
    // </div>
    <div></div>
  );
};

export default Papa;
