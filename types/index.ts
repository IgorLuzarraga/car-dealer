import { MouseEventHandler } from 'react'
import { Option } from 'fp-ts/lib/Option';

export enum AppSections {
    CarCatalogue = "CarCatalogue",
}

export type CustomBtnProps = {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    // containerStyles?: string;
    containerStyles: Option<string>;
    textStyles?: string;
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