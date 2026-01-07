'use client';

import { MenuTriggerProps } from '@/shared/types/ui/menu.types';
import { ArrowDownIcon, ArrowUpIcon } from '../../../icons';

export default function MenuTrigger({
  onClick,
  isOpen,
  title,
  icon,
}: MenuTriggerProps) {
  return (
    <>
      <div className="p-1">
        <button
          onClick={onClick}
          className="gap-1 p-2 transition radius-lg hover:bg-Color-Background-Assistive"
        >
          <div className="flex items-center gap-1">
            {icon && <div>{icon} </div>}
            <div className="text-Headline4-SemiBold">{title}</div>
            <div>
              {isOpen ? (
                <ArrowUpIcon fill="#121317" />
              ) : (
                <ArrowDownIcon fill="#121317" />
              )}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
