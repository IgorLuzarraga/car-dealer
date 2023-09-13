import { CarProps } from "@/types";

type props = {
    car: CarProps;
}


const ShowMakeAndModel = ({ car }: props) => {
    return (
        <div className="w-full flex justify-between items-start gap-2">
            <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                {car.make} {car.model}
            </h2>
        </div>
    )
}

export default ShowMakeAndModel