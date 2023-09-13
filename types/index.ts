import { MouseEventHandler } from 'react'
import { Option } from 'fp-ts/lib/Option';

export enum AppSections {
    CarCatalogue = "CarCatalogue",
}

export type HomeProps = {
    searchParams: FilterProps;
}

export type FilterProps = {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export type CustomBtnProps = {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    // containerStyles?: string;
    containerStyles: Option<string>;
    // textStyles?: string;
    textStyles: Option<string>;
    title: string;
    // rightIcon?: string;
    rightIcon: Option<string>;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type OptionProps = {
    title: string;
    value: string;
}

export type CustomFilterProps = {
    title: string;
    options: OptionProps[];
}

export type SearchManuFacturerProps = {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}
export type CarsType = CarProps[]

export type CarProps = {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export type CarCardProps = {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export type CarDetailsProps = {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export type ShowMoreProps = {
    pageNumber: number;
    isNext: boolean;
}