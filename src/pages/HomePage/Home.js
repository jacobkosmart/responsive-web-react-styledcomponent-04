import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
    </>
  );
};

export default Home;
