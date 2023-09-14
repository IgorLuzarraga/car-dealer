import Image from "next/image";

const CarLogo = () => {
    return (
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
    )
}

export default CarLogo