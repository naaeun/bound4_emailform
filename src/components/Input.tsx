'use client';

import { useEffect, useState } from 'react';
import { InputProps } from '../types/form.types';

export default function Input({
  state = 'default',
  size = 'xl',
  disabled,
  placeholder,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
  iconLeft,
  iconRight,
  name,
  value,
  onClick,
  onKeyDown,
}: InputProps) {
  const [internalValue, setInternalValue] = useState<string>(value);

  // 👇 이 코드 추가
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const iconSizeClass = ICON_SIZE_CLASSES[size] || '';

  const baseClass = 'flex items-center radius-md border  h-fit';
  const stateClass =
    VARIANT_CLASSES[state] ||
    (disabled ? VARIANT_CLASSES['disabled'] : VARIANT_CLASSES['default']);
  const sizeClass = SIZE_CLASSES[size] || '';
  const inputClass = `border-none outline-none w-full ${
    disabled ? 'cursor-not-allowed bg-Color-Primitive-Neutral-0' : ''
  } ${PLACEHOLDER_CLASSES[state] || PLACEHOLDER_CLASSES['default']}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = e.target.value;
      setInternalValue(newValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <>
      <div
        className={`${baseClass} ${stateClass} ${sizeClass} ${
          disabled ? 'pointer-events-none' : ''
        } `}
      >
        {iconLeft && (
          <div className={`flex items-center justify-center ${iconSizeClass}`}>
            {iconLeft}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder as string}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          className={inputClass}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          name={name}
        />
        {iconRight && (
          <div
            className={`flex items-center justify-center ${iconSizeClass}`}
            onClick={typeof onClick === 'function' ? onClick : undefined}
          >
            {iconRight}
          </div>
        )}
      </div>
    </>
  );
}

const VARIANT_CLASSES: {
  [key: string]: string;
} = {
  default: 'border-Color-Border-Normal',
  active:
    'border-Color-Primitive-CosmicBlue-500 text-Color-Primitive-Neutral-800 ',
  invalid: 'border-Color-Primitive-Red-500',
  disabled:
    'border-Color-Primitive-Neutral-100 text-Color-Primitive-Neutral-200',
};

const SIZE_CLASSES: {
  [key: string]: string;
} = {
  xl: 'text-Body1-Regular gap-2 px-5 py-3.5',
  lg: 'text-Body2-Regular gap-2 px-5 py-3.5',
  md: 'text-Body2-Regular gap-2 px-4 py-2.5',
  sm: 'text-Body2-Regular gap-1 px-3 py-1.5',
};

const PLACEHOLDER_CLASSES: {
  [key: string]: string;
} = {
  default: 'placeholder:text-Color-Primitive-Neutral-400',
  active: 'placeholder:text-Color-Primitive-Neutral-400',
  invalid: 'placeholder:text-Color-Primitive-Neutral-400',
  disabled: 'placeholder:text-Color-Primitive-Neutral-200',
};

const ICON_SIZE_CLASSES = {
  xl: 'h-6',
  lg: 'h-5', // 20px
  md: 'h-[18px]', // 18px
  sm: 'h-4', // 16px
};
