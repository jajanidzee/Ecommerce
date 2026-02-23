import React from "react";
import BigStarImg from "../../../assets/BigStar.png";
import EveningDressImg from "../../../assets/EveningDress.png";
import MaxiDressImg from "../../../assets/MaxiDress.png";
import GownImg from "../../../assets/Gown.png";
import ChicImg from "../../../assets/Chic.png";
import SunHatImg from "../../../assets/SunHat.png";
import PrintedImg from "../../../assets/Printed.png";
import Buttons from "../../Buttons/Buttons";
import { TbPointFilled } from "react-icons/tb";
const HomeCollection = () => {
  return (
    <div className="border-[#262626] border-dashed border-r-[3px] border-l-[3px] border-b-[3px] h-[9000px]">
      <div className="flex items-start border-[#262626] border-dashed border-b-[3px] ">
        {" "}
        <div className="mt-[80px] ml-[80px]    ">
          <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto] ">
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
        <img
          src={BigStarImg}
          alt="BigStarImg"
          className="ml-[10%] w-[425.4px] h-[446px]"
        />
      </div>
      <div className="grid grid-cols-3 ">
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px]  border-r-[3px] border-[#262626] border-dashed ">
          <img src={EveningDressImg} alt="EveningDressImg" className="" />
          <Buttons />
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Timeless A-line Evening Dress
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                Ankle-length
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $109.99
              </span>
            </p>
          </div>
        </div>
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px]  border-r-[3px] border-[#262626] border-dashed ">
          <img src={MaxiDressImg} alt="MAxiDressImg" className="" />
          <Buttons />
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Floral Bloom Maxi Dress
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                Slim Fit
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $54.99
              </span>
            </p>
          </div>
        </div>
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px]">
          {" "}
          <img src={GownImg} alt="GownImg" className="" />
          <Buttons />
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Elegant Evening Gown
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                Spacious
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $49.99
              </span>
            </p>
          </div>
        </div>
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px] border-b-[3px] border-[#262626] border-dashed   border-r-[3px] border-[#262626] border-dashed  border-t-[3px] border-[#262626] border-dashed ">
          <img src={ChicImg} alt="ChicImg " />
          <Buttons />{" "}
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Urban Chic Handbag
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                Flowing skirt
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $89.99
              </span>
            </p>
          </div>
        </div>
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px] border-b-[3px] border-[#262626] border-dashed   border-r-[3px] border-[#262626] border-dashed  border-t-[3px] border-[#262626] border-dashed">
          <img src={SunHatImg} alt="SunHatImg" />
          <Buttons />
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Sophisticate Sun Hat
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                One size fits all
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $24.99
              </span>
            </p>
          </div>
        </div>
        <div className="w-[532px] h-[639px] pl-[30px] pt-[30px] pr-[30px] pb-[30px] border-b-[3px] border-[#262626] border-dashed  border-t-[3px] border-[#262626] border-dashed  ">
          <img src={PrintedImg} alt="PrintedImg" />
          <Buttons />
          <h4 className="uppercase text-[24px] font-medium font-[Roboto_Mono] text-[#FFFFFF]">
            Boho Chic Printed Scarf
          </h4>
          <div className="flex items-center gap-[20px]">
            {" "}
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px] ">
              Fit <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                Lightweight
              </span>
            </p>
            <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] flex items-center gap-[8px]  ">
              Price <TbPointFilled className="w-[10px] h-[10px]" />
              <span className="text-[20px] text-[#CCCCCC] font-medium font-[Roboto_Mono]  ">
                $19.99
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
