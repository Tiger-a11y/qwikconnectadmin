import React from "react";

const VolumeIcon = ({
  onClick = () => {},
  height = 20,
  width = 15,
  className,
  color = "#25282B",
  style = {},
}) => {
  return (
    <svg
      onClick={onClick}
      style={style}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 5L6 9H2V15H6L11 19V5Z"
        fill="#white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.54 8.45996C16.4774 9.3976 17.004 10.6691 17.004 11.995C17.004 13.3208 16.4774 14.5923 15.54 15.53"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default VolumeIcon;
