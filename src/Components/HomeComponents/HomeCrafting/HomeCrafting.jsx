import React from "react";
import StarImg from "../../../assets/Stars.png";
import CircleImg from "../../../assets/3Circle.png";
import MaskImg from "../../../assets/Mask.png";
import CupImg from "../../../assets/Cup.png";
import MarkerImg from "../../../assets/Marker.png";
import LightImg from "../../../assets/Light.png";
const HomeCrafting = () => {
  return (
    <div className="mt-[104px] mb-[180px]">
      <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto] mb-[30px]">
        Crafting Trends, Inspiring Confidence
      </h2>
      <p className="text-[18px] text-[#676665] font-normal font-[Roboto]">
        Explore a world of fashion at StyleLoom, where trends meet
        affordability.
      </p>
      <div className="grid grid-cols-3 mt-[80px] ">
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] pr-[60px] pb-[60px] border-l-[3px] border-[#262626] border-dashed border-r-[3px] border-t-[3px]">
          <img src={StarImg} alt="StarImg" />
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Passionate Craftsmanship
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Every garment at StyleLoom is crafted with passion, reflecting our
            commitment to quality and innovation.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px]  ">
          <img src={CircleImg} alt="CircleImg" />
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Fashion Forward
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            We're more than a brand; we're trendsetters, <br /> curating styles
            that empower and inspire <br /> confidence.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px]">
          <img src={MaskImg} alt="MaskImg" />
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Customer-Centric Approach
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            At StyleLoom, our customers are at the heart of <br /> everything we
            do. Your satisfaction is our measure <br /> of success.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] br-[60px] pb-[60px] border-l-[3px] border-[#262626] border-dashed border-r-[3px] border-t-[3px] border-b-[3px] ">
          <img src={CupImg} alt="CupImg" />
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Global Inspiration
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Influenced by global trends, we bring you a diverse <br /> and
            dynamic collection, embodying the spirit of <br /> fashion from
            around the world.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px] border-b-[3px] ">
          <img src={MarkerImg} alt="MarkerImg" />
          <h3 className="text-[white] text-[24px] font-normal font-[Roboto] mt-[50px]">
            Empowering Your Style
          </h3>
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto] mt-[16px]">
            Beyond clothing, StyleLoom is a lifestyle. Join us <br /> on a
            journey of self-expression and empowerment <br /> through fashion.
          </p>
        </div>
        <div className="w-[532px] h-[397px] pl-[60px] pt-[60px] br-[60px] pb-[60px] border-r-[3px] border-[#262626] border-dashed border-t-[3px] border-b-[3px]">
          <img src={LightImg} alt="LightImg" />
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
