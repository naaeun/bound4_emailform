const ArrowDownIcon = ({
  fill = '#121317',
  width = 20,
  height = 20,
  className,
}: {
  fill: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path id="Vector" d="M14 8L9.97 14L6 8H14Z" fill={fill} />
    </svg>
  );
};

export default ArrowDownIcon;
