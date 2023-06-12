import React from "react";
import Image from "next/image";

import { CourseCardProps as Props } from "./CourseCard.types";
import Button from "@/components/global/Button/Button";
import Students from "./Students/Students";

const CourseCard: React.FC<Props> = (props) => {
  const { details } = props;
  const { name, description, price, discount } = details ?? {};
  const { students, image, period } = details ?? {};

  const pricesNode = () => {
    return (
      <div className="flex items-center gap-[0.8rem]">
        <div className="text-secondary text-[1.7rem] font-bold leading-[2.5rem]">
          {`$ ${discount ? price - (price * discount) / 100 : price}`}
        </div>
        {!!discount && (
          <div className="opacity-50 font-normal leading-[2.2rem] text-grayS40L10 line-through">{`$ ${price}`}</div>
        )}
      </div>
    );
  };

  return (
    <div className="w-[29.6rem] h-[42.8rem] rounded-[1.4rem] overflow-hidden flex flex-col bg-white shadow-md">
      <div className="w-[29.6rem] h-[17.9rem] overflow-hidden">
        <Image src={image} alt={name} width={296} height={179} />
      </div>
      <div className="flex flex-col flex-1 justify-between pt-[2rem] pb-[2.2rem] px-[1.6rem] text-[1.2rem] leading-[1.6rem] font-normal font-raleway relative">
        <Students amount={students} />
        <div className="mt-[3.2rem]">
          <p className="text-grayS12L53 mb-[0.8rem]">{period}</p>
          <h2 className="text-primary text-[1.6rem] leading-[2.4rem] font-extrabold">
            {name}
          </h2>
          <p className="text-grayS0L30">{description}</p>
        </div>
        <div className="justify-self-end flex justify-between items-center">
          {pricesNode()}
          <Button
            title="Enroll Now"
            customClasses="py-[1rem] pl-[2rem] pr-[2rem] font-railway text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

CourseCard.defaultProps = {};

export default CourseCard;
