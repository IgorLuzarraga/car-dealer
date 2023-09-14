import Image from "next/image"

const HeroImage = () => {
    return (
        <>
            <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 
            bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"
            >
                <Image src="/hero-bg.png" alt="hero" fill />
            </div>

            <div className="relative w-[90%] xl:w-full h-[590px] xl:h-full z-0">
                {/* <Image src="/hero.png" alt="hero" width={900} height={900} className="object-contain" /> */}
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
        </>
    )
}

export default HeroImage