import { MouseEventHandler } from 'react'
import { Option } from 'fp-ts/lib/Option';

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