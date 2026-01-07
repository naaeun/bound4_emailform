import { HelperTextProps } from '../types/form.types';

const HelperText: React.FC<HelperTextProps> = ({
  text,
  helperIcon,
  validationState = 'default',
}) => {
  const textClass = TEXT_CLASSES[validationState.toString()]; // 상태별 텍스트 스타일

  return (
    <div className="flex items-center gap-1">
      {helperIcon && (
        <div className="flex items-center justify-center">{helperIcon}</div>
      )}
      <p className={`${textClass}`}>{text}</p>
    </div>
  );
};

export default HelperText;

const TEXT_CLASSES: { [key: string]: string } = {
  default: 'text-Color-Label-Assistive text-Caption1-Regular',
  disabled: 'text-Color-Label-Assistive text-Caption1-Regular',
  valid: 'text-Color-Feedback-Success text-Caption1-Regular',
  invalid: 'text-Color-Feedback-Error text-Caption1-Regular',
  active: 'text-Color-Label-Assistive text-Caption1-Regular',
};
