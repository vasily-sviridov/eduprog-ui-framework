import React, { FC, useCallback, useState } from "react";
import "./BaseInput.scss";
import classList from "@utils/classList/classList";

export type TextInputProps = {
  /**
   * Лейбл для поля ввода
   */
  label: string;

  /**
   * Максимальная длина текста в поле ввода
   */
  maxLength?: number;

  /**
   * Тип поля ввода
   */
  inputType?: "text" | "tel" | "email" | "password" | "number" | "card";

  /**
   * Определяет маску для ввода значений
   */
  mask?: string;

  /**
   * Значение поля ввода по умолчанию
   */
  defaultValue?: string;

  /**
   * Событие вызываемое при клике на input
   */
  onClick?: () => void;

  /**
   * Событие обновления input
   */
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * Событие обновления input
   */
  onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;

  /**
   * Событие нажатия input
   */
  onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * Добавление дополнительных элементов к инпуту слева
   */
  leftAdditional?: React.ReactNode;

  /**
   * Добавление дополнительных элементов к инпуту справа
   */
  rightAdditional?: React.ReactNode;

  /**
   * Паттерн валидации input
   */
  pattern?: string;

  /**
   * Имя элемента в DOM
   */
  name?: string;

  /**
   * Параметры автокомпилита
   */
  autocomplete?: "none" | "cc-number";

  /**
   * Курсор, который будет при наведении на input
   */
  cursor?: "pointer" | "text";

  /**
   * BaseInput доступен только для чтения
   */
  readonly?: boolean;

  /**
   *
   */
  forceFocus?: boolean;
};

const BaseInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      inputType = "text",
      maxLength,
      mask,
      defaultValue = "",
      onChange,
      onPaste,
      onKeyDown,
      leftAdditional,
      rightAdditional,
      pattern,
      name = "",
      readonly = false,
      autocomplete = "none",
      cursor = "text",
      onClick,
      forceFocus= false,
    },
    ref
  ) => {
    const [active, setActive] = useState(false);

    const inputFocus = () => {
      setActive(!active);
    };

    const inputBlur = () => {
      setActive(!active);
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value, event);
      }
    };

    const inputPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
      if (onPaste) {
        onPaste(event);
      }
    };

    const inputKeyDown = (event: any) => {
      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    const inputClicked = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <div className="input">
        <div
          className={classList([
            "input-label",
            (forceFocus || active || defaultValue) ? "input-label-active" : "",
          ])}
        >
          {label}
        </div>

        <div className="input-field">
          <div className="input-left">{leftAdditional}</div>

          <input
            className="input-control"
            type={inputType == "card" ? "tel" : inputType}
            maxLength={maxLength}
            placeholder={active ? mask : ""}
            onFocus={inputFocus}
            onBlur={inputBlur}
            value={defaultValue}
            onClick={() => inputClicked()}
            onChange={(event) => inputChange(event)}
            onPaste={(event) => inputPaste(event)}
            onKeyDown={(event) => inputKeyDown(event)}
            pattern={pattern}
            name={name}
            readOnly={readonly}
            ref={ref}
            autoComplete={autocomplete}
            style={{ cursor: cursor }}
          />

          <div className="input-right" style={{ cursor: cursor }}>
            {rightAdditional}
          </div>
        </div>
      </div>
    );
  }
);

export default BaseInput;
