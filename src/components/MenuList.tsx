'use client';

import { useEffect, useRef } from 'react';
import { MenuListProps } from '../types/menu.types';

export default function MenuList({
  children,
  isOpen,
  onCloseClick,
  className,
}: MenuListProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지하여 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onCloseClick(); // 외부 클릭 시 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCloseClick]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className={`${className} flex flex-col gap-1 bg-Color-Background-Normal p-1 shadow-moderate radius-lg`}
    >
      {children}
    </div>
  );
}
