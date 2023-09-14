"use client";

import { useState } from "react";
import { CarProps } from "@/types";
// import { CustomBtn } from "../..";
import CustomBtn from "@/components/custom/CustomBtn";
import CarDetails from "../carDetails/CarDetails";
import { some } from 'fp-ts/lib/Option';
import CarFeatures from "./CarFeatures";
import ShowMakeAndModel from "./ShowMakeAndModel";
import ShowCarRentPrice from "./ShowCarRentPrice";
import ShowCarImage from "./ShowCarImage";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 
    bg-primary-blue-100 hover:bg-white hover:shadow-xl rounded-3xl group">

      <ShowMakeAndModel car={car} />

      <ShowCarRentPrice car={car} />

      <ShowCarImage car={car} />

      <div className='relative flex w-full mt-2'>

        <div className='group-hover:invisible w-full'>
          <CarFeatures car={car} />
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomBtn
            title='Car Details'
            containerStyles={some('w-full py-[16px] rounded-full bg-primary-blue')}
            textStyles={some('text-white text-[14px] leading-[17px] font-bold')}
            rightIcon={some('/right-arrow.svg')}
            handleClick={() => setIsOpen(true)}
          />
        </div>

      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
