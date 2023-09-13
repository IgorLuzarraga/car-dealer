import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";

type props = {
    car: CarProps;
}

const ShowCarImage = ({ car }: props) => {
    return (
        <div className='w-full my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt='car model' width={200} height={200} priority className='object-contain' />
        </div>
    )
}

export default ShowCarImage