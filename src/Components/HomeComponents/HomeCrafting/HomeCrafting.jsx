import React from "react";
import StarImg from "../../../assets/Stars.png";
import CircleImg from "../../../assets/3Circle.png";
import MaskImg from "../../../assets/Mask.png";
import CupImg from "../../../assets/Cup.png";
import MarkerImg from "../../../assets/Marker.png";
import LightImg from "../../../assets/Light.png";
import BiggestStarImg from "../../../assets/BiggestStar.png";
import Big3CircleImg from "../../../assets/Big3Circle.png";
import BigMaskImg from "../../../assets/BigMask.png";
import BigCupImg from "../../../assets/BigCup.png";
import BigMarkerImg from "../../../assets/BigMarker.png";
import BigLightImg from "../../../assets/BigLight.png";
const HomeCrafting = () => {
  return (
    <div className=" rounded-[12px] pt-[80px] border-[#262626] border-dashed border-r-[3px] border-l-[3px] ">
      {" "}
      <div className="pl-[80px]">
        {" "}
        <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto] mb-[30px]">
          Crafting Trends, Inspiring Confidence
        </h2>
        <p className="text-[18px] text-[#676665] font-normal font-[Roboto]">
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-[80px] h-[794px] ">
        <div className="w-[532px] h-[397px] pl-[60px]  pr-[60px] pb-[160px] border-[#262626] border-dashed border-r-[3px] border-t-[3px]">
          <div className="flex gap-[206px] ">
            <img
              src={StarImg}
              alt="StarImg"
              className="mt-[60px] w-[94px] h-[94px]"
            />
            <img src={BiggestStarImg} alt="BiggestStarImg" />
          </div>
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Passionate Craftsmanship
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Every garment at StyleLoom is crafted with passion, reflecting our
            commitment to quality and innovation.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px]  ">
          <div className="flex gap-[206px] ">
            <img
              src={CircleImg}
              alt="CircleImg"
              className="mt-[60px] w-[94px] h-[94px]"
            />
            <img src={Big3CircleImg} alt="Big3CircleImg" />
          </div>

          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Fashion Forward
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            We're more than a brand; we're trendsetters, <br /> curating styles
            that empower and inspire <br /> confidence.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] br-[60px] pb-[60px] border-[#262626] border-dashed border-t-[3px]">
          <div className="flex gap-[200px] ">
            <img
              src={MaskImg}
              alt="MaskImg"
              className=" mt-[60px] w-[94px] h-[94px]"
            />
            <img src={BigMaskImg} alt="BigMaskImg" />
          </div>
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Customer-Centric Approach
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            At StyleLoom, our customers are at the heart of <br /> everything we
            do. Your satisfaction is our measure <br /> of success.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] br-[60px] pb-[60px] border-[#262626] border-dashed border-r-[3px] border-t-[3px] border-b-[3px] ">
          <div className="flex gap-[203px] ">
            <img
              src={CupImg}
              alt="CupImg"
              className=" mt-[60px] w-[94px] h-[94px]"
            />
            <img src={BigCupImg} alt="BigCupImg" />
          </div>
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Global Inspiration
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Influenced by global trends, we bring you a diverse <br /> and
            dynamic collection, embodying the spirit of <br /> fashion from
            around the world.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px]  br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px] border-b-[3px] ">
          <div className="flex gap-[180px] ">
            {" "}
            <img
              src={MarkerImg}
              alt="MarkerImg"
              className="mt-[60px] w-[94px] h-[94px]"
            />
            <img src={BigMarkerImg} alt="BigMarkerImg" />
          </div>
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Empowering Your Style
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Beyond clothing, StyleLoom is a lifestyle. Join us <br /> on a
            journey of self-expression and empowerment <br /> through fashion.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] br-[60px] pb-[60px] border-[#262626] border-dashed border-t-[3px] border-b-[3px]">
          <div className="flex gap-[200px] ">
            {" "}
            <img
              src={LightImg}
              alt="LightImg"
              className="mt-[60px] w-[94px] h-[94px]"
            />
            <img src={BigLightImg} alt="BigLightImg" />
          </div>
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Sustainable Practices
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            StyleLoom is committed to sustainability, <br /> integrating
            eco-friendly practices into our <br /> production process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCrafting;
