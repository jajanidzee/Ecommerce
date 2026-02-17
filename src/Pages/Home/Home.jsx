import React from "react";
import { Header } from "../../Components/Header/HEader";
import HomeElevateStyle from "../../Components/HomeComponents/HomeElevateStyle/HomeElevateStyle";

const Home = () => {
  return (
    <div className="max-w-[1920px] bg-[#0F0F0F] m-auto pt-[30px] pl-[162px] pr-[162px] ">
      <Header />
      <HomeElevateStyle />
    </div>
  );
};

export default Home;
