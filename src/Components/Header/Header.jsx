import React from "react";
import StyleImg from "../../assets/Style.svg";
import { FaShoppingCart } from "react-icons/fa";
export const Header = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between brounded-[12px]border-[#262626] border-dashed  ">
        <div className="flex items-center gap-[14px]">
          <button className="w-[104px] h-[63px] bg-[#262626] text-[#FFFFFF] text-[18px] rounded-[12px] font-[Roboto_Mono] font-medium">
            Home
          </button>
          <button className="w-[135px] h-[63px] bg-[#0F0F0F] text-[#B3B3B2] text-[18px] font-[Roboto_Mono] font-medium rounded-[12px] border-[2px] border-[#262626] border-dashed ">
            Products
          </button>
        </div>
        <img src={StyleImg} alt="StyleImg" />
        <div className="flex items-center gap-[14px]">
          <button className="w-[60px] h-[60px] bg-[#1A1A1A] pl-[18px] pr-[20px] pt-[20px] pb-[20px] rounded-[12px]  ">
            <FaShoppingCart className="text-[#FFFFFF] w-[20.89px] h-[19.5px]" />
          </button>
          <button className="w-[136px] h-[63px] bg-[#AE9B84] text-[#0F0F0F] rounded-[12px] text-[18px] font-[Roboto_Mono] font-medium ">
            Contact
          </button>
        </div>
      </div>
      <hr className=" bg-[#262626] border-dashed  border-[2px] mt-[30px]  " />
    </>
  );
};
