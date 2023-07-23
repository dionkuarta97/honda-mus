const CardMobil = ({ data }) => {
   return (
      <div className="flex w-[90%]  relative z-0 group flex-col">
         <div className="text-white mb-2">{data.nama}</div>

         <div className="inline-block w-full bg-teal-600 py-8 drop-shadow-md rounded-md ">
            <img
               alt={data.nama}
               src={data.thumbnail}
               className="w-screen h-full max-w-xs sm:max-w-md overflow-hidden"
            />
         </div>
         <div className="w-full  absolute py-8 px-4  rounded-t-md -bottom-40 duration-300 ease-in-out  group-hover:block group-hover:bottom-0 bg-green-800 h-[50%]">
            <div className="flex items-center flex-row">
               <div className="text-sm lg:text-base ">Harga Mulai Dari :</div>
               <div className="ml-auto text-base lg:text-md">
                  Rp. {data.harga.toLocaleString("id-ID")}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardMobil;
