import Image from "next/image";
import { CloseModalBtnProps } from "@/types";

const CloseModalBtn = ({ closeModal }: CloseModalBtnProps) => {
    return (
        <button
            type='button'
            className='absolute top-2 left-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
            onClick={closeModal}
        >
            <Image
                src='/close.svg'
                alt='close'
                width={20}
                height={20}
                className='object-contain'
            />
        </button>
    )
}

export default CloseModalBtn