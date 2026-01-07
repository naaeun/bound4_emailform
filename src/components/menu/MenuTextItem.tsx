import clsx from 'clsx';
import { MenuTextItemProps } from '../../types/menu.types';

export const MenuTextItem = ({
  mainText = 'Menu_Item',
  onClick,
  subText = 'Sub Text',
  state = 'default',
  className,
  disabled = false, // ✅ 추가
  isSelected = false,
}: MenuTextItemProps) => {
  const baseStyle =
    'flex flex-col w-full px-[20px] py-[14px] rounded-lg cursor-pointer transition-colors duration-150';

  const stateStyles = {
    default: 'text-Color-Label-Normal hover:bg-Color-Background-Assistive',
    hover: 'bg-Color-Background-Assistive text-Color-Label-Normal',
    selected:
      'bg-Color-Background-Assistive text-Color-Label-Normal font-medium',
    disabled: 'text-Color-Label-Disabled cursor-not-allowed',
  };

  const wrapperStyle = clsx(
    baseStyle,
    isSelected ? stateStyles['selected'] : stateStyles[state],
    disabled && stateStyles['disabled'],
    className
  );
  return (
    <div onClick={!disabled ? onClick : undefined} className={wrapperStyle}>
      <p className="font-pretendard text-[14px] font-normal leading-[20px] text-Color-Label-Normal">
        {mainText}
      </p>
      <p className="font-pretendard mt-[4px] text-[12px] leading-[16px] text-Color-Label-Assistive">
        {subText}
      </p>
    </div>
  );
};
