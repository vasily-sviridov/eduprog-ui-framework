import React, { FC } from "react";
import "./Checkbox.scss";
export declare type CheckboxPropsType = {
    /**
     * контент слева или справа чекбокса
     */
    children?: React.ReactNode;
    /**
     * Положение `children`
     */
    position?: "left" | "right";
    /**
     * Цвет чекбокса
     */
    type: "primary" | "secondary" | "accent";
    /**
     * Checkbox располагается во всю ширину родителя
     */
    fullwidth?: boolean;
    /**
     * Отключен ли checkbox
     */
    disabled?: boolean;
    /**
     * Checkbox установлен
     */
    checked?: boolean;
    /**
     * Коллбэк вызывается при изменении значения чекбокса
     * @param value - новое значение чекбокса
     */
    onChange?: (value: boolean) => void;
};
/**
 * Компонент чекбокса.
 */
declare const Checkbox: FC<CheckboxPropsType>;
export default Checkbox;
