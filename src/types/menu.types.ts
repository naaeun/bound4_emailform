export type MenuSize = 'sm' | 'md' | 'lg';
export type MenuState = 'default' | 'hover' | 'selected';
export type MenuTextState = 'default' | 'hover' | 'selected' | 'disabled';

export interface MenuTriggerProps {
  onClick: () => void;
  isOpen: boolean;
  title: string;
  icon?: React.ReactNode;
}

export interface MenuItemProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  isSelected?: boolean;
  size?: MenuSize;
  state?: MenuState;
  badge?: React.ReactNode;
  className?: string;
  disabled?: boolean; // ✅ 추가
}

export interface MenuListProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseClick: () => void;
  size?: MenuSize; // 추가됨
  itemCount?: number; // 추가됨
  className?: string;
}

export interface MenuTextItemProps {
  mainText?: string;
  subText?: string;
  onClick?: () => void;
  state?: MenuTextState;
  isSelected?: boolean;
  className?: string;
  disabled?: boolean; // ✅ 추가
}

export interface MenuTextListProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseClick: () => void;
  size?: MenuSize; // 추가됨
  itemCount?: number; // 추가됨
  className?: string;
}

export interface DropdownMenuProps {
  items: string[]; // 드롭다운 목록
  defaultSelected?: string; // 기본 선택 값 (optional)
  icon?: React.ReactNode;
}

export interface ProfileMenuProps {
  onLogoutClick?: () => void;
  onClick: () => void;
  onProfileClick?: () => void;
}
