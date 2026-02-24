import React from "react";
import BigStarImg from "../../../assets/BigStar.png";
import EveningDressImg from "../../../assets/EveningDress.png";
import MaxiDressImg from "../../../assets/MaxiDress.png";
import GownImg from "../../../assets/Gown.png";
import ChicImg from "../../../assets/Chic.png";
import SunHatImg from "../../../assets/SunHat.png";
import PrintedImg from "../../../assets/Printed.png";
import HomeCollectionDivs from "../HomeCollectionDivs/HomeCollectionDivs";
import HomeAllButtons from "../HomeAllButtons/AllButtons";
const HomeCollection = () => {
  return (
    <div className="border-[#262626] border-dashed border-x-[3px] border-b-[3px] rounded-[12px]  ">
      <div className="flex items-start border-[#262626] border-dashed pt-[80px] relative overflow-hidden  ">
        {" "}
        <div className=" ml-[80px]    ">
          <h2 className="uppercase text-[48px] text-[white] font-normal font-[Roboto] ">
            Elevate Your Style with Our Latest Collection
          </h2>
          <p className="text-[#676665] text-[18px] font-normal font-[Roboto] mt-[30px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
          <div className="flex items-center gap-[14px] mt-[50px] mb-[80px]">
            <HomeAllButtons btn1="All" />
            <HomeAllButtons btn1="Mens" />
            <HomeAllButtons btn1="Womens" ClassName=" " />
            <HomeAllButtons btn1="Kids" />
          </div>
        </div>
        <img
          src={BigStarImg}
          alt="BigStarImg"
          className=" absolute right-[0] top-[0] h-[446px]  "
        />
      </div>
      <div className="grid grid-cols-3 ">
        <HomeCollectionDivs
          h4="Timeless A-line Evening Dress"
          img={EveningDressImg}
          p="Fit"
          span="Ankle-length"
          price="Price"
          span2="$109.99"
        />
        <HomeCollectionDivs
          h4="Floral Bloom Maxi Dress"
          img={MaxiDressImg}
          p="Fit"
          span="Slim Fit"
          price="Price"
          span2="$54.99"
        />
        <HomeCollectionDivs
          h4="Elegant Evening Gown"
          img={GownImg}
          p="Fit"
          span="Flowing skirt"
          price="Price"
          span2="$89.99"
        />
        <HomeCollectionDivs
          h4="Urban Chic Handbag"
          img={ChicImg}
          p="Fit"
          span="Spacious"
          price="Price"
          span2="$49.99"
        />
        <HomeCollectionDivs
          h4="Sophisticate Sun Hat"
          img={SunHatImg}
          p="Fit"
          span="One size fits all"
          price="Price"
          span2="$24.99"
        />
        <HomeCollectionDivs
          h4="Boho Chic Printed Scarf"
          img={PrintedImg}
          p="Fit"
          span="Lightweight"
          price="Price"
          span2="$19.99"
        />
      </div>
    </div>
  );
};

export default HomeCollection;
