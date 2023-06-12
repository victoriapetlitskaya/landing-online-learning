import React, { useState } from "react";

import { CategoriesProps as Props } from "./Categories.types";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import CategoriesList from "./CategoriesList/CategoriesList";
import { categories } from "./Categories.helpers";
import Button from "../global/Button/Button";

const Categories: React.FC<Props> = (props) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center px-[1.2rem] xl:px-[9rem] pb-[11rem]">
      <SectionTitle title="Courses category" underlined />
      <p className="text-[2.2rem] leading-[3.5rem] font-normal text-center max-w-[82.8rem] text-grayS11L46 mb-[6rem]">
        Onlearing is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>
      <CategoriesList
        categories={showAll ? categories : categories.slice(0, 4)}
      />
      <Button
        type="outline"
        title={showAll ? "Show less" : "View all"}
        customClasses="mt-[6rem] pt-[1.2rem] pb-[1.2rem] px-[6.2rem]"
        onClick={() => setShowAll(!showAll)}
      />
    </div>
  );
};

Categories.defaultProps = {};

export default Categories;
