import React from "react";

function BrandIcon(props) {
  const title = props.title || "brand icon";

  return (
    <svg
      height="36"
      width="36"
      viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path d="M18.54 12.43h6.1v12.21h-12.21v-12.21h6.11z" fill="#fff" />
        <path
          d="M2.55 12.39c-3.4 3.4-3.4 8.9 0 12.29l9.84 9.84c3.4 3.4 8.9 3.4 12.29 0l9.84-9.84c3.4-3.4 3.4-8.9 0-12.29l-9.84-9.84c-3.4-3.4-8.9-3.4-12.29 0l-9.84 9.84z m20.29 10.45c2.38-2.38 2.38-6.23 0-8.61-2.38-2.38-6.23-2.38-8.61 0-2.38 2.38-2.38 6.23 0 8.61 2.38 2.38 6.23 2.38 8.61 0z"
          fill="#2962FF"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BrandIcon;
