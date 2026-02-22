import React from "react";
import { Header } from "../../Components/Header/HEader";
import HomeElevateStyle from "../../Components/HomeComponents/HomeElevateStyle/HomeElevateStyle";
import HomeCrafting from "../../Components/HomeComponents/HomeCrafting/HomeCrafting";
import HomeCollection from "../../Components/HomeComponents/HomeCollection/HomeCollection";

const Home = () => {
  return (
    <div className="max-w-[1920px] bg-[#0F0F0F] m-auto pt-[30px] pl-[162px] pr-[162px] ">
      <Header />
      <HomeElevateStyle />
      <HomeCrafting />
      <HomeCollection />
    </div>
  );
};

export default Home;
