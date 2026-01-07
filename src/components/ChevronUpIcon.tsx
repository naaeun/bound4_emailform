const ChevronUpIcon = ({
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
        d="M14.6563 13.0226C14.8988 13.1825 15.2289 13.156 15.4424 12.9425C15.6559 12.729 15.6824 12.3989 15.5225 12.1564L15.4424 12.0577L10.4424 7.05773C10.1983 6.81365 9.8017 6.81365 9.55762 7.05773L4.55762 12.0577L4.47754 12.1564C4.31759 12.3989 4.34414 12.729 4.55762 12.9425C4.7711 13.156 5.10119 13.1825 5.34375 13.0226L5.44238 12.9425L10 8.38488L14.5576 12.9425L14.6563 13.0226Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronUpIcon;
