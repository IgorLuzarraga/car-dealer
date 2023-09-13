import { calculateCarRent } from "@/utils";
import { CarProps } from "@/types";

type props = {
    car: CarProps;
}

const ShowCarRentPrice = ({ car }: props) => {
    const { city_mpg, year } = car;

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
            <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
            {carRent}
            <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>
    )
}

export default ShowCarRentPrice