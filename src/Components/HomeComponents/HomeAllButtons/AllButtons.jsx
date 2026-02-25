import React from "react";
import { motion } from "motion/react";
const HomeAllButtons = ({ btn1, ClassName }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className={` ${ClassName} rounded-[18px] hover:border-[0] border-[2px] border-[#262626] border-dashed px-[24px] py-[14px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium hover:bg-[#C2B4A3] hover:text-[#0F0F0F] cursor-pointer`}
      >
        {btn1}
      </motion.button>
    </div>
  );
};

export default HomeAllButtons;
