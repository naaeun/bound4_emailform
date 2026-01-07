'use client';

import { useEffect, useState } from 'react';
import { FormGroupProps } from '../types/form.types';
import Input from './Input';
import Label from './Label';

export default function FormGroup({
  labelProps,
  inputProps,
  helperProps,
}: FormGroupProps) {
  const { label, isOptional, labelIcon } = labelProps;
  const {
    placeholder,
    value,
    size,
    state,
    onChange,
    disabled,
    type,
    onKeyDown,
    onFocus,
    onBlur,
    name,
    iconLeft,
    iconRight,
  } = inputProps;
  const { helperText, validationState: initialValidationState } = helperProps;

  const [validationState, setValidationState] = useState(
    initialValidationState
  );

  // validationState가 active인 경우 default로 변경
  useEffect(() => {
    if (initialValidationState === 'active') {
      setValidationState('default');
    } else {
      setValidationState(initialValidationState);
    }
  }, [initialValidationState]);

  const hasHelperText = !!helperText;

  return (
    // default
    <div
      className={
        hasHelperText ? 'flex w-full flex-col gap-2' : 'flex w-full flex-col'
      }
    >
      <div className="flex flex-col gap-2">
        <Label
          text={label}
          isOptional={isOptional}
          labelIcon={labelIcon}
          label={''}
        />
        <Input
          onKeyDown={onKeyDown}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          size={size}
          state={state}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </div>
    </div>
  );
}
