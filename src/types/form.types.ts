import { ChangeEvent, HTMLInputTypeAttribute, JSX } from 'react';

export type SizeType = 'sm' | 'xl' | 'lg' | 'md';
export type ValidationType =
  | 'valid'
  | 'invalid'
  | 'active'
  | 'default'
  | 'disabled';
export type StateType = 'default' | 'invalid' | 'active' | 'disabled';

export interface BaseProps {
  size?: SizeType; // 공통 크기 속성
  validationState?: ValidationType; // 공통 상태
}

export interface LabelProps extends BaseProps {
  label: string; // Label 텍스트
  isOptional?: boolean; // Optional 여부
  labelIcon?: React.ReactNode; // Label 아이콘
  text?: string; // Label 텍스트
}

export interface InputProps {
  state: 'default' | 'active' | 'invalid' | 'disabled'; // input 상태
  size: 'xl' | 'lg' | 'md' | 'sm'; // input 크기
  disabled?: boolean; // 비활성화 여부
  placeholder?: React.ReactNode;
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // input 상태 변화 핸들러
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // input 상태 변화 핸들러
  iconLeft?: React.ReactNode; // JSX 요소로 받을 수 있도록 타입 지정
  iconRight?: React.ReactNode; // JSX 요소로 받을 수 있도록 타입 지정
  value: string;
  name?: string;
  onClick?: string;
}
export interface HelperProps extends BaseProps {
  helperText?: string; // 피드백 메시지
  helperIcon?: React.ReactNode; // HelperText 아이콘
}

export interface HelperTextProps {
  text?: string; // 보조 설명 텍스트
  helperIcon?: React.ReactNode; // 아이콘 (선택사항)
  validationState?: ValidationType; // 상태에 따른 스타일 적용
}
//  formGroupProps => 실제 전달용
export interface FormGroupProps {
  labelProps: LabelProps; // Label 관련 props
  inputProps: InputProps; // Input 관련 props
  helperProps: HelperProps; // HelperText 관련 props
}

export interface FormGroupState {
  state: StateType;
  validationState: ValidationType;
  helperIcon?: JSX.Element;
  placeholder?: string;
  helperText?: string;
}

// 디자인 페이지 용 프롭
export interface FormGroupDataProps {
  size: SizeType;
  states: FormGroupState[];
}

export interface BaseProps {
  size?: SizeType; // 공통 크기 속성
  validationState?: ValidationType; // 공통 상태
}

export interface LabelProps extends BaseProps {
  label: string; // Label 텍스트
  isOptional?: boolean; // Optional 여부
  labelIcon?: React.ReactNode; // Label 아이콘
  text?: string; // Label 텍스트
}

export interface HelperProps extends BaseProps {
  helperText?: string; // 피드백 메시지
  helperIcon?: React.ReactNode; // HelperText 아이콘
}

export interface HelperTextProps {
  text?: string; // 보조 설명 텍스트
  helperIcon?: React.ReactNode; // 아이콘 (선택사항)
  validationState?: ValidationType; // 상태에 따른 스타일 적용
}

//  formGroupProps => 실제 전달용
export interface FormGroupProps {
  labelProps: LabelProps; // Label 관련 props
  inputProps: InputProps; // Input 관련 props
  helperProps: HelperProps; // HelperText 관련 props
}

export interface FormGroupState {
  state: StateType;
  validationState: ValidationType;
  helperIcon?: JSX.Element;
  placeholder?: string;
  helperText?: string;
}

// 디자인 페이지 용 프롭
export interface FormGroupDataProps {
  size: SizeType;
  states: FormGroupState[];
}

// -------------------------------------------------
// 카운트폼그룹
export interface CountFormGroupProps {
  labelProps: CountLabelProps; // Label 관련 props
  inputProps: InputProps; // Input 관련 props
  helperProps: HelperProps; // HelperText 관련 props
}
// Count 라벨 전용
export interface CountLabelProps extends BaseProps {
  text: string; // 라벨 텍스트
  count: number; // 카운트
  totalCount: number;
}

// 내부 states
interface CountFormGroupState {
  state: StateType;
  validationState: ValidationType;
  helperIcon?: JSX.Element;
  placeholder?: string;
  helperText?: string;
}
// 디자인 페이지 용 프롭
export interface CountFormGroupDataProps {
  size: SizeType;
  states: CountFormGroupState[];
}

// ------------------------------------------------
// 드롭다운폼그룹 props
export interface DropdownFormGroupProps {
  labelProps: LabelProps;
  helperProps: HelperProps; // HelperText 관련 props
  size?: SizeType;
  hasValue?: boolean;
  inputValue?: string;
  state?: ValidationType;
  placeholder?: React.ReactNode;
  inputState?: ValidationType; // ✅ 추가
  className?: string;
  /** 드롭다운에 표시할 옵션 리스트 */
  options?: string[];
  /** 옵션 선택 시 호출되는 콜백 */
  onOptionSelect?: (option: string) => void;
}

// 드롭다운 Input
export interface DropdownInputProps {
  state?: ValidationType; // ✅ input의 상태 (border)
  validationState?: ValidationType; // ✅ helper의 상태
  placeholder?: React.ReactNode;
  size: SizeType;
  hasValue?: boolean;
  inputValue?: string;
  isOpen?: boolean;
}
