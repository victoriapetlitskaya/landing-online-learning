import React from "react";

import { ExclusiveBundlesProps as Props } from "./ExclusiveBundles.types";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import Description from "../global/Description/Description";

const ExclusiveBundles: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center px-[1.2rem] xl:px-[9rem] pb-[11rem]">
      <SectionTitle title="Exclusive Bundles" underlined />
      <Description
        text="Onlearing is one powerful online software suite that combines all the tools needed to run a successful school or office."
        customClasses="mb-[8rem]"
      />
    </div>
  );
};

ExclusiveBundles.defaultProps = {};

export default ExclusiveBundles;
