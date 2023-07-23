import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
   open: { x: 0 },
   closed: { x: "-100%" },
};

const NavBar = () => {
   const [show, setShow] = useState(false);
   return (
      <>
         <nav className="absolute flex w-screen items-center text-white sm:py-[3vh] flex-row px-8 py-[2vh] sm:px-[15vw] drop-shadow-md bg-teal-800">
            <NavLink
               to={"/"}
               className="text-xl text-white font-bold"
            >
               Damuih
            </NavLink>
            <div className="ml-auto">
               <button
                  type="button"
                  onClick={() => {
                     setShow(!show);
                  }}
                  disabled={show}
                  className={`active:bg-cyan-400 ${
                     show && "opacity-0"
                  }  active:scale-95 items-center p-2 ml-3 text-sm text-gray-200 rounded-lg sm:hidden`}
               >
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M0 25H30V21.6667H0V25ZM0 16.6667H30V13.3333H0V16.6667ZM0 5V8.33333H30V5H0Z"
                        fill="white"
                     />
                  </svg>
               </button>
            </div>

            <div className="hidden ml-auto gap-x-8 flex-row flex sm:flex">
               <NavLink
                  className={({ isActive }) =>
                     `active:scale-95 ${
                        isActive &&
                        "text-cyan-200 border-cyan-200 border-b-2 rounded-sm text-semibold"
                     }`
                  }
                  to={"/"}
               >
                  Beranda
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `active:scale-95 ${
                        isActive &&
                        "text-cyan-200 border-cyan-200 border-b-2 rounded-sm text-semibold"
                     }`
                  }
                  to={"/list-mobil"}
               >
                  List Mobil
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     `active:scale-95 ${
                        isActive &&
                        "text-cyan-200 border-cyan-200 border-b-2 rounded-sm text-semibold"
                     }`
                  }
                  to={"/testimoni"}
               >
                  Testimoni
               </NavLink>
            </div>
         </nav>

         <motion.div
            initial={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            animate={show ? "open" : "closed"}
            variants={variants}
            className="text-white  z-40 flex  px-8 py-[2vh] sm:hidden static fixed flex-col w-[80%] min-h-full bg-teal-950"
         >
            <div className="flex flex-row border-b-2 items-center">
               <NavLink
                  to={"/"}
                  className="text-xl text-white font-bold"
               >
                  Damuih
               </NavLink>
               <button
                  onClick={() => {
                     setShow(false);
                  }}
                  type="button"
                  className="p-2 active:bg-cyan-400 active:scale-95 ml-auto text-sm text-gray-200 rounded-lg"
               >
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
                        fill="white"
                     />
                  </svg>
               </button>
            </div>
            <div className="flex flex-col gap-y-2">
               <NavLink
                  onClick={() => {
                     setShow(false);
                  }}
                  className={({ isActive }) =>
                     `active:scale-95 mt-10 ${
                        isActive && "text-cyan-300 rounded-sm text-semibold"
                     }`
                  }
                  to={"/"}
               >
                  Beranda
               </NavLink>
               <NavLink
                  onClick={() => {
                     setShow(false);
                  }}
                  className={({ isActive }) =>
                     `active:scale-95 ${
                        isActive && "text-cyan-300 rounded-sm text-semibold"
                     }`
                  }
                  to={"/list-mobil"}
               >
                  List Mobil
               </NavLink>
               <NavLink
                  onClick={() => {
                     setShow(false);
                  }}
                  className={({ isActive }) =>
                     `active:scale-95 ${
                        isActive && "text-cyan-300 rounded-sm text-semibold"
                     }`
                  }
                  to={"/testimoni"}
               >
                  Testimoni
               </NavLink>
            </div>
         </motion.div>
      </>
   );
};

export default NavBar;
