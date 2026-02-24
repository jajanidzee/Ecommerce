import React from "react";

const HomeCraftingDivs = ({ miniImg, BigImg, h3, p }) => {
  return (
    <div className="w-[532px] h-[397px] pl-[60px] pb-[160px] border-[#262626] border-dashed border-r-[3px] border-b-[3px]">
      <div className="flex gap-[206px] relative ">
        <img
          src={miniImg}
          alt="StarImg"
          className="mt-[60px] w-[94px] h-[94px]"
        />
        <img src={BigImg} alt="BiggestStarImg" className="absolute right-0" />
      </div>
      <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
        {h3}
      </h3>
      <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px] w-[412px]">
        {p}
      </p>
    </div>
  );
};

export default HomeCraftingDivs;
