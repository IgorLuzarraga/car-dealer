import { CarProps } from "@/types";

type props = {
    car: CarProps;
}

const CarDetailsInfo = ({ car }: props) => {
    return (
        <div className='mt-3 flex flex-wrap gap-4'>
            {Object.entries(car).map(([key, value]) => (
                <div className='flex justify-between gap-5 w-full text-right' key={key} >
                    <h4 className='text-grey capitalize'>
                        {key.split("_").join(" ")}
                    </h4>
                    <p className='text-black-100 font-semibold'>
                        {value}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CarDetailsInfo