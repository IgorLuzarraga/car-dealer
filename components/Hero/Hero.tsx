"use client";

import { CustomBtn } from '@/components'
import HeroImage from './HeroImage';


const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
            <div className='flex-1 pt-36 px-6 sm:px-16'>
                <h1 className="text-[50px]  sm:text-[64px] 2xl:text-[72px] font-extrabold">
                    Find, book, rent a car—quick and super easy!
                </h1>

                <p className="text-[27px] text-black-100 font-light mt-5">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <CustomBtn
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="xl:flex-[1.5] flex justify-start items-start w-full xl:h-screen">
                <HeroImage />
            </div>
        </div>
    )
}

export default Hero

