import React from "react";
import BigStarImg from "../../../assets/BigStar.png";
const HomeCollection = () => {
  return (
    <div>
      <div className="flex items-start">
        {" "}
        <div>
          <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto]">
            Elevate Your Style with Our Latest Collection
          </h2>
          <p className="text-[#676665] text-[18px] font-normal font-[Roboto] mt-[30px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
          <div className="flex items-center gap-[14px] mt-[50px]">
            <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[81px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium ">
              All
            </button>
            <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[92px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium">
              Mens
            </button>
            <button className="rounded-[12px] h-[55px] w-[113px] text-[#0F0F0F] text-[18px] font-[Roboto_Mono] font-medium bg-[#C2B4A3]">
              Womens
            </button>
            <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[92px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium ">
              Kids
            </button>
          </div>
        </div>
        <img src={BigStarImg} alt="BigStarImg" />
      </div>
    </div>
  );
};

export default HomeCollection;
