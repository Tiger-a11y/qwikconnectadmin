import React from "react";

const UserIcon = ({ height = 32, width = 32, className,style }) => {
  return (
    <svg
    style={style}
    width={height}
    height={width}
    className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6668 28V25.3333C22.6668 23.9188 22.1049 22.5623 21.1047 21.5621C20.1045 20.5619 18.748 20 17.3335 20H6.66683C5.25234 20 3.89579 20.5619 2.89559 21.5621C1.8954 22.5623 1.3335 23.9188 1.3335 25.3333V28"
        stroke="#4787F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z"
        stroke="#4787F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M30.6665 28V25.3333C30.6656 24.1516 30.2723 23.0037 29.5483 22.0698C28.8243 21.1358 27.8107 20.4688 26.6665 20.1733"
        stroke="#4787F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M21.3335 4.17334C22.4807 4.46707 23.4975 5.13427 24.2237 6.06975C24.9498 7.00523 25.344 8.15578 25.344 9.34001C25.344 10.5242 24.9498 11.6748 24.2237 12.6103C23.4975 13.5457 22.4807 14.2129 21.3335 14.5067"
        stroke="#4787F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
    </svg>
  );
};
export default UserIcon;
