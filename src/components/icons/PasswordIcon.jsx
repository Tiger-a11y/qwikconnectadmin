import React from "react";

const PasswordIcon = ({
  onClick = () => {},
  height = 24,
  width = 24,
  className,
  color = "#25282B",
}) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      className={className}
      fill="none"
    >
      <g clip-path="url(#clip0_809_4221)">
        <path
          d="M9.34203 18.7819L7.41103 18.2639L8.19803 15.3249C7.01999 14.8904 5.92514 14.2572 4.96103 13.4529L2.80803 15.6069L1.39303 14.1919L3.54703 12.0389C2.3311 10.5826 1.51411 8.83563 1.17603 6.96886L3.14403 6.60986C3.90303 10.8119 7.57903 13.9999 12 13.9999C16.42 13.9999 20.097 10.8119 20.856 6.60986L22.824 6.96786C22.4864 8.83488 21.6697 10.5822 20.454 12.0389L22.607 14.1919L21.192 15.6069L19.039 13.4529C18.0749 14.2572 16.9801 14.8904 15.802 15.3249L16.589 18.2649L14.658 18.7819L13.87 15.8419C12.6324 16.0539 11.3677 16.0539 10.13 15.8419L9.34203 18.7819Z"
          fill="#202020"
        />
      </g>
      <defs>
        <clipPath id="clip0_809_4221">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PasswordIcon;
