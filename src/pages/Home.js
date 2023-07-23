import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { listMobil } from "../data";
import CardMobil from "../components/CardMobil";

const cardVariants = {
   offscreen: {
      x: -300,
      opacity: 0,
   },
   onscreen: {
      x: 0,
      opacity: 1,
      transition: {
         type: "spring",
         bounce: 0.4,
         duration: 1,
      },
   },
};

const Home = () => {
   return (
      <>
         <Helmet>
            <title>
               Beranda - Honda Soekarno Hatta Pekanbaru, Dealer Mobil Pekanbaru
            </title>
         </Helmet>

         <div className="min-h-screen flex-col w-full flex">
            <div className="h-[40%] w-full flex-col items-center lg:px-[20vw] px-[2vw] mb-12 lg:items-start lg:justify-center lg:flex-row flex">
               <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                     duration: 2,
                     type: "spring",
                     stiffness: 100,
                  }}
                  className="hidden drop-shadow-md font-extrabold text-4xl text-center w-[50%] h-full items-center justify-center flex lg:flex lg:text-2xl text-white"
               >
                  Honda Soekarno Hatta, Dealer Resmi Honda untuk Pekanbaru
               </motion.div>
               <motion.div
                  className="items-center justify-center w-full lg:w-[50%]"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                     duration: 2,
                     type: "spring",
                     stiffness: 100,
                  }}
               >
                  <img
                     src={require("../assets/hrv.png")}
                     alt="mobilio"
                     className="object-contain w-full"
                  />
               </motion.div>

               <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                     duration: 2,
                     type: "spring",
                     stiffness: 100,
                  }}
                  className="lg:hidden flex z-0 drop-shadow-md font-extrabold text-xl  text-center text-white"
               >
                  Honda Soekarno Hatta, Dealer Resmi Honda untuk Pekanbaru
               </motion.div>
            </div>

            <div className="flex flex-col">
               <div className="lg:mt-[10vh] bg-emerald-800 mt-[10vw] rounded-t-2xl drop-shadow-sm pb-[8vh] pt-[8vw] md:px-[5vw] lg:pt-[4vw] lg:pb-[20vh] text-white text-center lg:px-[20vw] px-4 font-bold text-base sm:text-xl self-center">
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{
                        duration: 2,
                     }}
                  >
                     "Selamat datang di showroom kami, tempat di mana keunggulan
                     Honda memenuhi kebutuhan mobilitas Anda. Temukan koleksi
                     mobil Honda terbaru dan terlengkap, dari desain elegan
                     hingga teknologi canggih. Dapatkan pengalaman mengemudi tak
                     tertandingi dan percaya diri dalam setiap perjalanan.
                     Segera temukan mobil Honda pilihan Anda dan mulailah
                     petualangan tak terlupakan bersama kami."
                  </motion.div>
               </div>
               <div className="bg-emerald-700 w-full rounded-3xl py-[8vw] lg:px-[20vw] px-4  lg:py-[4vw] relative -top-4 lg:-top-20 ">
                  <div className="text-white mt-8 text-2xl font-bold">
                     List Mobil
                  </div>
                  <motion.div
                     initial="offscreen"
                     whileInView="onscreen"
                     variants={cardVariants}
                     className="my-16 flex-nowrap overflow-y-hidden no-scrollbar hide-scroll-bar flex overflow-x-auto  gap-x-4 text-white text-2xl font-bold"
                  >
                     {listMobil.map((el, idx) => (
                        <CardMobil
                           data={el}
                           key={idx}
                        />
                     ))}
                  </motion.div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
