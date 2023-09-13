import { CarProps } from "@/types";

type props = {
    car: CarProps;
}

const CarMakeAndModel = ({ car }: props) => {
    return (
        <div className="flex justify-start items-center gap-2">
            <h2 className='font-semibold text-xl capitalize'>
                {car.make}
            </h2>
            <h2 className='font-semibold text-xl capitalize'>
                {car.model}
            </h2>
        </div>
    )
}

export default CarMakeAndModel