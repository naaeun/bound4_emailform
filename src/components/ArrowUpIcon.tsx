const ArrowUpIcon = ({
  fill = '#121317',
  width = 20,
  height = 20,
}: {
  fill: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="Vector" d="M14 14L9.97 8L6 14H14Z" fill={fill} />
    </svg>
  );
};

export default ArrowUpIcon;
