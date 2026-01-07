const ChevronDownIcon = ({
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
      <path
        d="M14.6563 6.97755C14.8988 6.81759 15.2289 6.84415 15.4424 7.05763C15.6559 7.27111 15.6824 7.60119 15.5225 7.84376L15.4424 7.94239L10.4424 12.9424C10.1983 13.1865 9.8017 13.1865 9.55762 12.9424L4.55762 7.94239L4.47754 7.84376C4.31759 7.60119 4.34414 7.27111 4.55762 7.05763C4.7711 6.84415 5.10119 6.81759 5.34375 6.97755L5.44238 7.05763L10 11.6152L14.5576 7.05763L14.6563 6.97755Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronDownIcon;
