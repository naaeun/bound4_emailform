import clsx from 'clsx';
import { MenuItemProps } from '../../types/menu.types';

export const MenuItem = ({
  label = 'Dropdown_Menu_Item',
  onClick,
  icon,
  isSelected = false,
  size = 'lg',
  state = 'default',
  badge,
  className,
  disabled = false, // ✅ 추가
}: MenuItemProps) => {
  const baseStyle = `flex cursor-pointer radius-lg items-center ${className}`;
  const sizeStyles = {
    sm: 'text-Caption1-Regular',
    md: 'text-Body2-Regular',
    lg: 'text-Body1-Regular',
  };

  const stateStyles = {
    default: 'text-Color-Label-Neutral hover:bg-Color-Background-Assistive',
    hover:
      'hover:bg-Color-Background-Assistive text-Color-Label-Neutral bg-Color-Background-Assistive',
    selected: 'text-Color-Label-Normal bg-Color-Background-Assistive',
  };
  const wrapperStyle = clsx(
    baseStyle,
    icon && badge
      ? 'w-[240px] gap-[8px] px-3 py-2 radius-md'
      : icon
        ? 'flex w-[180px] gap-[8px] py-2 px-3'
        : `w-[432px] p-2 `,
    isSelected ? stateStyles['selected'] : stateStyles[state],
    !isSelected && state === 'hover' && stateStyles['hover']
  );
  return (
    <div
      onClick={!disabled ? onClick : undefined} // ✅ 비활성화 시 클릭 막기
      className={wrapperStyle}
    >
      {icon && <>{icon}</>}
      <p className={`${sizeStyles[size]}`}>{label}</p>
      <div className="flex-1" /> {/* label과 badge 사이 여백 */}
      {badge && <>{badge}</>}
    </div>
  );
};
