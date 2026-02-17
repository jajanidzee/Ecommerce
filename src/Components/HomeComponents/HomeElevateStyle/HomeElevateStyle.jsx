import React from "react";
import GirlImg from "../../../assets/Girl.png";
import { MdArrowOutward } from "react-icons/md";
const HomeElevateStyle = () => {
  return (
    <>
      {" "}
      <div className="relative">
        <img src={GirlImg} alt="GirlImg " />
        <button className="bg-[#1F1F1F] absolute bottom-[-35px] left-[45%] w-[159px] h-[63px] rounded-[12px] text-[#FFFFFF] font-[Roboto_Mono] font-normal text-[18px]  border-[1px] border-[#AE9B84] border-dashed flex items-center gap-[4px] pt-[21px] pr-[24px] pl-[24px] pb-[24px]">
          Shop Now
          <MdArrowOutward />
        </button>
      </div>
      <div className="flex items-center ">
        <div className="w-[798px] pl-[80px] pt-[41.5px] pr-[80px[ pb-[81px] border-b-[3px]  border-[#262626] border-dashed border-l-[3px]  ">
          <div>
            <div className="flex items-center gap-[14px] mb-[30px]">
              <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[81px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium ">
                All
              </button>
              <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[92px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium">
                Mens
              </button>
              <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[113px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium">
                Womens
              </button>
              <button className="rounded-[12px] border-[2px] border-[#262626] border-dashed h-[55px] w-[92px] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium ">
                Kids
              </button>
            </div>
            <h2 className="uppercase text-white text-[48px] font-[Roboto_Mono] leading-[110%] font-normal mb-[30px]">
              Elevate Your Style with StyleLoom
            </h2>
            <p className="text-[#676665] text-[18px] font-[Roboto_Mono] font-normal   ">
              Explore a world of fashion at StyleLoom, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-[399px] h-[219px]  border-l-[3px]  border-b-[3px] border-[#262626] border-dashed pt-[58px] pl-[50px] pr-[50px] pb-[50px]">
            <h1 className=" text-white text-[50px] font-[Roboto_Mono] font-medium tracking-[-5px] mb-[3px]">
              1,500 +
            </h1>
            <p className="text-[#81807E] text-[18px] font-[Roboto_Mono] font-normal">
              Fashion Products
            </p>
          </div>
          <div className="w-[399px] h-[219px] border-l-[3px] border-r-[3px] border-b-[3px] border-[#262626] border-dashed pt-[58px] pl-[50px] pr-[50px] pb-[50px]">
            <h1 className=" text-white text-[50px] font-[Roboto_Mono] font-medium tracking-[-5px] mb-[3px]">
              50 +
            </h1>
            <p className="text-[#81807E] text-[18px] font-[Roboto_Mono] font-normal">
              New arrivals every month.
            </p>
          </div>
          <div className="w-[399px] h-[207px]  border-l-[3px] border-b-[3px] border-[#262626] border-dashed pl-[50px] pt-[70px] pr-[50px] pb-[70px]">
            <h1 className=" text-white text-[50px] font-[Roboto_Mono] font-medium tracking-[-5px] mb-[3px]">
              30%
            </h1>
            <p className="text-[#81807E] text-[18px] font-[Roboto_Mono] font-normal">
              OFF on select items.
            </p>
          </div>
          <div className="w-[399px] h-[207px]  border-l-[3px] border-r-[3px] border-b-[3px] border-[#262626] border-dashed pl-[50px] pt-[70px] pr-[50px] pb-[70px]">
            <h1 className=" text-white text-[50px] font-[Roboto_Mono] font-medium tracking-[-5px] mb-[3px]">
              95%
            </h1>
            <p className="text-[#81807E] text-[18px] font-[Roboto_Mono] font-normal">
              Customer Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeElevateStyle;
