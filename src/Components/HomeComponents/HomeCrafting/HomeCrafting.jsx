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
import HomeCraftingDivs from "../HomeCraftingDivs/HomeCraftingDivs";
const HomeCrafting = () => {
  return (
    <div className=" rounded-[12px] pt-[80px] border-[#262626] border-dashed border-r-[3px] border-l-[3px]   ">
      {" "}
      <div className="pl-[80px] border-[#262626] border-b-[3px] border-dashed">
        {" "}
        <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto] mb-[30px]   ">
          Crafting Trends, Inspiring Confidence
        </h2>
        <p className="text-[18px] text-[#676665] font-normal font-[Roboto] mb-[80px]">
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>
      <div className="grid grid-cols-3 h-[794px]">
        <HomeCraftingDivs
          miniImg={StarImg}
          BigImg={BiggestStarImg}
          h3="Passionate Craftsmanship"
          p="Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation."
        />
        <HomeCraftingDivs
          miniImg={CircleImg}
          BigImg={Big3CircleImg}
          h3="Fashion Forward"
          p="We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence."
        />
        <HomeCraftingDivs
          miniImg={MaskImg}
          BigImg={BigMaskImg}
          h3="Customer-Centric Approach"
          p="At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success."
        />
        <HomeCraftingDivs
          miniImg={CupImg}
          BigImg={BigCupImg}
          h3="Global Inspiration"
          p="Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world."
        />
        <HomeCraftingDivs
          miniImg={MarkerImg}
          BigImg={BigMarkerImg}
          h3="Empowering Your Style"
          p="Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion."
        />
        <HomeCraftingDivs
          miniImg={LightImg}
          BigImg={BigLightImg}
          h3="Sustainable Practices"
          p="StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process."
        />
      </div>
    </div>
  );
};

export default HomeCrafting;
