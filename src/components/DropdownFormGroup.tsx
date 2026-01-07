'use client';

import { useState } from 'react';
import {
  DropdownFormGroupProps,
  DropdownInputProps,
  SizeType,
  StateType,
  ValidationType,
} from '../types/form.types';
import ChevronDownIcon from './ChevronDownIcon';
import ChevronUpIcon from './ChevronUpIcon';
import HelperText from './HelperText';
import Label from './Label';
import MenuList from './MenuList';
import { MenuItem } from './menu/MenuItem';

export default function DropdownFormGroup({
  labelProps,
  state,
  hasValue,
  helperProps,
  size = 'lg',
  placeholder,
  inputValue = '',
  inputState,
  className,
  options = [],
  onOptionSelect,
}: DropdownFormGroupProps) {
  const { label, isOptional, labelIcon } = labelProps;
  const { helperText, validationState } = helperProps;
  const [isOpen, setIsOpen] = useState(false);

  const hasHelperText = !!helperText;
  return (
    <div
      className={`${className} ${hasHelperText ? 'flex gap-2' : 'flex flex-col'} relative w-[343px]`}
    >
      <div
        className="flex flex-col gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Label
          text={label}
          isOptional={isOptional}
          labelIcon={labelIcon}
          label={'Label'}
        />
        <DropdownInput
          size={size}
          state={inputState ?? validationState} // ✅ inputState 우선
          validationState={validationState || state}
          placeholder={placeholder}
          inputValue={inputValue}
          hasValue={hasValue}
          isOpen={isOpen}
        />
      </div>
      {isOpen && (
        <div className="absolute top-[70px] z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <MenuList
            className="w-full"
            isOpen={isOpen}
            onCloseClick={() => setIsOpen(false)}
          >
            {options.map((opt) => (
              <MenuItem
                className="w-full"
                size={size}
                key={opt}
                label={opt}
                isSelected={opt !== opt}
                onClick={() => {
                  onOptionSelect?.(opt);
                  setIsOpen(false);
                }}
              />
            ))}
          </MenuList>
        </div>
      )}
      {hasHelperText && (
        <HelperText
          text={helperText}
          validationState={validationState} // 기존: state ❌ → validationState ✅
        />
      )}
    </div>
  );
}

const DropdownInput = ({
  state = 'default',
  placeholder = '',
  size = 'lg',
  hasValue = false,
  inputValue = '',
  isOpen,
}: DropdownInputProps) => {
  const sizeHeightClass: Record<SizeType, string> = {
    sm: 'h-[36px] px-3 py-1.5 gap-1 text-Body2-Regular',
    md: 'h-[44px] px-4 py-2 gap-2 text-Body2-Regular',
    lg: 'h-[52px] px-5 py-[14px] gap-2 text-Body2-Regular',
    xl: 'h-[52px] px-5 py-[14px] gap-2 text-Body1-Regular',
  };

  const borderClassMap: Record<ValidationType | StateType, string> = {
    valid: 'border-Color-Primary-Normal',
    invalid: 'border-Color-Feedback-Error',
    active: 'border-[#5B4EFF]',
    default: 'border-Color-Border-Normal',
    disabled:
      'border-Color-Border-Neutral bg-Color-Background-Normal text-Color-Label-Faint cursor-not-allowed',
  };

  // ✅ isOpen이 true면 상태를 'active'로 처리
  const resolvedState: ValidationType | StateType =
    state === 'disabled' ? 'disabled' : isOpen ? 'active' : state;

  return (
    <div
      className={`flex items-center border radius-md ${sizeHeightClass[size]} ${borderClassMap[resolvedState]}`}
    >
      {!hasValue && <span className="w-full">{placeholder}</span>}
      {hasValue && (
        <input
          className="w-full bg-transparent outline-none cursor-pointer"
          placeholder={placeholder?.toString()}
          value={inputValue}
          readOnly
          disabled={state === 'disabled'}
        />
      )}
      <div className="cursor-pointer">
        {resolvedState === 'active' ? (
          <ChevronUpIcon width={24} height={24} fill="#60647B" />
        ) : (
          <ChevronDownIcon width={24} height={24} fill="#60647B" />
        )}
      </div>
    </div>
  );
};
