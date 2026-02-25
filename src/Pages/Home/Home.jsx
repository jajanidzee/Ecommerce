import React from "react";
import { Header } from "../../Components/Header/HEader";
import HomeElevateStyle from "../../Components/HomeComponents/HomeElevateStyle/HomeElevateStyle";
import HomeCrafting from "../../Components/HomeComponents/HomeCrafting/HomeCrafting";
import HomeCollection from "../../Components/HomeComponents/HomeCollection/HomeCollection";
import HomeAnswers from "../../Components/HomeComponents/HomeAnswers/HomeAnswers";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="max-w-[1920px] bg-[#0F0F0F] m-auto  pl-[162px] pr-[162px] pt-[47px]  ">
      <Header />
      <HomeElevateStyle />
      <HomeCrafting />
      <HomeCollection />
      <HomeAnswers />
      <Footer />
    </div>
  );
};

export default Home;
