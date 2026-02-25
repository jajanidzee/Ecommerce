import React from "react";
import Buttons from "../../HomeWearButtons/HomeWearButtons";
import { TbPointFilled } from "react-icons/tb";
import HomeWearButtons from "../../HomeWearButtons/HomeWearButtons";
const HomeCollectionDivs = ({ img, h4, p, price, span, span2 }) => {
  return (
    <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px]  border-r-[3px] border-[#262626] border-dashed border-t-[3px] border-[#262626] border-dashed  ">
      <img src={img} alt="EveningDressImg" className="" />
      <HomeWearButtons />
      <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
        {h4}
      </h4>
      <div className="flex items-center gap-[20px]">
        <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
          {p}
          <TbPointFilled className="w-[10px] h-[10px]" />
          <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
            {span}
          </span>
        </p>
        <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
          {price} <TbPointFilled className="w-[10px] h-[10px]" />
          <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
            {span2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomeCollectionDivs;
