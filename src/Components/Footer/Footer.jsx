import React from "react";
import BigStyleImg from "../../assets/BigStyle.png";
import InstagramImg from "../../assets/Instagram.png";
import BasketballImg from "../../assets/Basketball.png";
import TwitterImg from "../../assets/Twitter.png";
import BeImg from "../../assets/Be.png";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
const footer = [{}];
const Footer = () => {
  return (
    <div className="py-[100px] mt-[36px] border-t-[3px] border-[#262626] border-dashed">
      <div className="flex items-center justify-between border-b-[3px] border-[#262626] border-dashed pb-[100px] ">
        <img src={BigStyleImg} alt="BigStyleImg" className="cursor-pointer" />
        <div className="flex items-center gap-[20px] ">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            src={InstagramImg}
            alt="InstagramImg"
            className="cursor-pointer"
          />{" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            src={BasketballImg}
            alt="BasketballImg"
            className="cursor-pointer"
          />{" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            src={TwitterImg}
            alt="TwitterImg"
            className="cursor-pointer"
          />{" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            src={BeImg}
            alt="BeImg"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className=" py-[96.5px] flex items-center gap-[80px] border-b-[3px] border-[#262626] border-dashed">
        <div>
          <p className="text-[22px] text-white font-medium font-[Roboto] cursor-pointer">
            Home
          </p>
          <ul className="text-[20px] text-[#676665] font-normal font-[Roboto] flex items-center gap-[18px] mt-[30px]">
            <li className=" cursor-pointer">Why Us</li>
            <TbPointFilled className="w-[10px] h-[10px]" />
            <li className=" cursor-pointer">About Us</li>
            <TbPointFilled className="w-[10px] h-[10px]" />
            <li className=" cursor-pointer">Testimonials</li>
            <TbPointFilled className="w-[10px] h-[10px]" />
            <li className=" cursor-pointer">FAQ’s</li>
          </ul>
        </div>
        <div>
          {" "}
          <p className="text-[22px] text-white font-medium font-[Roboto] cursor-pointer">
            Products
          </p>
          <ul className="text-[20px] text-[#676665] font-normal font-[Roboto] flex items-center gap-[18px] mt-[30px]">
            <li className="cursor-pointer">Menswear</li>
            <TbPointFilled className="w-[10px] h-[10px]" />
            <li className="cursor-pointer">Womenswear</li>
            <TbPointFilled className="w-[10px] h-[10px]" />
            <li className="cursor-pointer">Kidswear</li>
          </ul>
        </div>
        <div>
          {" "}
          <p className="text-[22px] text-white font-medium font-[Roboto] cursor-pointer">
            Subscribe to Newsletter
          </p>
          <form
            className="mt-[30px] w-[478.67px] h-[63px] bg-[#1A1A1A] rounded-[12px] text-[18px] flex justify-between items-center px-[24px] py-[18px]"
            action=""
          >
            <input
              type="email"
              className="placeholder:text-[#676665] w-[90%] h-full text-white"
              placeholder="Your Email"
            />
            <FaArrowRight className="text-[#AE9B84] w-[24px] h-[24px] cursor-pointer" />
          </form>
        </div>{" "}
      </div>
      <div className="flex justify-between py-[50px]">
        <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono]">
          © 2024 StyleLoom. All rights reserved.
        </p>
        <div className="flex gap-[11px]">
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] cursor-pointer">
            Terms & Conditions
          </p>
          <hr className="h-[27px] bg-[#81807E] w-[2px]" />
          <p className="text-[18px] text-[#81807E] font-normal font-[Roboto_Mono] cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
