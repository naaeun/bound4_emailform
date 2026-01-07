import { LabelProps } from '../types/form.types';

export default function Label({ text, isOptional, labelIcon }: LabelProps) {
  return (
    <div className="flex items-center gap-1">
      <p className="text-xs text-Color-Primitive-Neutral-600 text-Caption1-SemiBold">
        {text}
      </p>
      {isOptional && (
        <span className="text-Color-Primitive-Neutral-400 text-Caption1-Regular">
          (Optional)
        </span>
      )}
      {labelIcon && <>{labelIcon}</>}
    </div>
  );
}
