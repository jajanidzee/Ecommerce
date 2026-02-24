import React from "react";
import HomeAllButtons from "../HomeAllButtons/AllButtons";
import AbstractImg from "../../../assets/Abstract.png";
import HomeAnswersDivs from "../HomeAnswersDivs/HomeAnswersDivs";

function HomeAnswers() {
  return (
    <div className="mt-[36px]    border-[#262626] border-dashed border-x-[3px] border-t-[3px] rounded-[12px] ">
      <div className=" flex  border-[#262626] border-dashed border-b-[3px] relative overflow-hidden ">
        {" "}
        <div>
          {" "}
          <h2 className="text-[48px] pl-[80px] text-[#FFFFFF] font-medium font-[Roboto] pt-[80px] uppercase">
            Have Questions? We Have Answers.
          </h2>
          <p className="text-[#676665] pl-[80px] text-[18px] font-normal font-[Roboto] mt-[30px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
          <div className="flex items-center pl-[80px] gap-[14px] mt-[50px] mb-[80px]">
            <HomeAllButtons btn1="All" />
            <HomeAllButtons btn1="Ordering" />
            <HomeAllButtons btn1="Shipping" />
            <HomeAllButtons btn1="Returns" />
            <HomeAllButtons btn1="Support" />
          </div>
        </div>
        <img
          src={AbstractImg}
          alt="AbstractImg"
          className="absolute right-[0] top-[0px] "
        />
      </div>
      <HomeAnswersDivs />
    </div>
  );
}

export default HomeAnswers;
