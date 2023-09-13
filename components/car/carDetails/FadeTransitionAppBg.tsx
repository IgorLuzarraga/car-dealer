import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const FadeTransitionAppBg = ({ children }: Props) => {
    return (
        <Transition.Child
            as={Fragment}
            enter='ease-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
        >
            {children}
        </Transition.Child>
    )
}

export default FadeTransitionAppBg;
