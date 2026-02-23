import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Buttons = ({ classname1, classname2 }) => {
  return (
    <div className="flex items-center justify-between mt-[30px] mb-[20px]">
      <button
        className={`${classname1} w-[142px] h-[47px] bg-[#262626] text-[#B3B3B2] text-[18px] font-normal font-[Roboto] rounded-[100px] border-[2px] border-[#81807E] border-dashed pl-[16px] pt-[10px] pr-[16px] pb-[10px]`}
      >
        Womenswear
      </button>
      <button
        className={`${classname2} border-[2px] border-[#AE9B84] border-dashed w-[159px] h-[63px] bg-[#262626] text-[#FFFFFF] text-[18px] font-normal font-[Roboto] flex items-center gap-[4px] pl-[24px] pt-[18px] pr-[24px] pb-[18px] `}
      >
        Shop Now
        <GoArrowUpRight />
      </button>
    </div>
  );
};

export default Buttons;
