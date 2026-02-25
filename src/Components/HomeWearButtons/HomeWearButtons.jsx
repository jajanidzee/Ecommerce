import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

const HomeWearButtons = ({ classname1, classname2 }) => {
  return (
    <div className="flex items-center justify-between mt-[30px] mb-[20px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className={`${classname1} hover:border-[0] w-[142px] h-[47px] bg-[#262626] text-[#B3B3B2] text-[18px] font-normal font-[Roboto] rounded-[100px] border-[2px] border-[#81807E] border-dashed pl-[16px] pt-[10px] pr-[16px] pb-[10px] hover:bg-[#C2B4A3] hover:text-[#0F0F0F] cursor-pointer`}
      >
        Womenswear
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className={`${classname2} text-nowrap hover:border-[0] rounded-[12px] border-[2px] border-[#AE9B84] border-dashed w-[159px] h-[63px] bg-[#262626] text-[#FFFFFF] text-[18px] font-normal font-[Roboto] flex items-center gap-[4px] px-[23px] py-[18px] hover:bg-[#C2B4A3] hover:text-[#0F0F0F] cursor-pointer `}
      >
        Shop Now
        <GoArrowUpRight className="w-[24px] h-[24px]" />
      </motion.button>
    </div>
  );
};

export default HomeWearButtons;
