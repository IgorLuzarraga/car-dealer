"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
// import { CustomBtn } from "./";
import CustomBtn from "./custom/CustomBtn";
import { some, none } from 'fp-ts/lib/Option';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center mt-10">

      {!isNext && (
        <CustomBtn
          btnType="button"
          title="Show More"
          containerStyles={some("bg-primary-blue rounded-full text-white")}
          textStyles={none}
          rightIcon={none}
          handleClick={handleNavigation}
        />

      )}
    </div>
  );
};

export default ShowMore;
