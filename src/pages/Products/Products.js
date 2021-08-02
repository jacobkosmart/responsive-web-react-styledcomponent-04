import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjTwo } from "./Data";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <Pricing />
    </>
  );
};

export default Products;
