import Image from "next/image";
import { CarProps } from "@/types";

type Props = {
    car: CarProps;
}

const CarFeatures = ({ car }: Props) => {
    const { city_mpg, transmission, drive } = car;

    return (
        <div className='flex justify-between text-grey'>

            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                <p className='text-[14px] leading-[17px]'>
                    {transmission === "a" ? "Automatic" : "Manual"}
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/tire.svg" width={20} height={20} alt="tire" />
                <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/gas.svg" width={20} height={20} alt="gas pump" />
                <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
            </div>

        </div>
    )
}

export default CarFeatures