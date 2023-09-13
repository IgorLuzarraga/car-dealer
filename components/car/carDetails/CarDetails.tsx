import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarDetailsProps } from "@/types";
import CarImages from "./CarImages";
import CarMakeAndModel from "./CarMakeAndModel";
import CarDetailsInfo from "./CarDetailsInfo";
import CloseModalBtn from "./CloseModalBtn";
import FadeTransitionAppBg from "./FadeTransitionAppBg";
import FadeTransition from "./FadeTransition";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>

        <FadeTransitionAppBg>
          <div className='fixed inset-0 bg-black bg-opacity-30'></div>
        </FadeTransitionAppBg>


        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>

            <FadeTransition >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform 
              rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'
              >
                <CloseModalBtn closeModal={closeModal} />

                <CarImages car={car} />

                <div className='flex-1 flex flex-col gap-2'>
                  <CarMakeAndModel car={car} />

                  <CarDetailsInfo car={car} />
                </div>
              </Dialog.Panel>
            </FadeTransition>

            {/* </Transition.Child> */}
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
