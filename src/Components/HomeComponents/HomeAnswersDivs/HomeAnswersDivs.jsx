import React from "react";

const HomeAnswersDivs = ({ bigtext, minitext }) => {
  return (
    <div className="w-[798px] p-[60px] border-[#262626] border-dashed border-r-[3px] border-b-[3px]">
      <h2 className="text-[24px] font-[Roboto] font-medium text-[#FFFFFF] mb-[16px]">
        {bigtext}
      </h2>
      <p className="text-[18px] text-[#81807E] font-[Roboto] font-normal">
        {minitext}
      </p>
    </div>
  );
};

export default HomeAnswersDivs;
