import React from "react";
import HomeAllButtons from "../HomeAllButtons/AllButtons";
import AbstractImg from "../../../assets/Abstract.png";
import HomeAnswersDivs from "../HomeAnswersDivs/HomeAnswersDivs";

function HomeAnswers() {
  return (
    <div className="mt-[36px]    border-[#262626] border-dashed border-x-[3px] border-t-[3px] rounded-[12px]">
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
      <div className="grid grid-cols-2">
        {" "}
        <HomeAnswersDivs
          bigtext="How can I place an order on StyleLoom?"
          smalltext="Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase."
        />
        <HomeAnswersDivs
          bigtext="Can I modify or cancel my order after placing it?"
          smalltext="Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase."
        />
        <HomeAnswersDivs
          bigtext="What payment methods do you accept?"
          smalltext="We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout."
        />
        <HomeAnswersDivs
          bigtext="How do I initiate a return?"
          smalltext="Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process."
        />
        <HomeAnswersDivs
          bigtext="How can I track my order?"
          smalltext="Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website."
        />
        <HomeAnswersDivs
          bigtext="Do you offer exchanges for products?"
          smalltext="At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order."
        />
      </div>
    </div>
  );
}

export default HomeAnswers;
