import React from "react";

function IceCream22(props) {
  const title = props.title || "ice cream 22";

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M17.41 10.71a0.5 0.5 0 0 0-0.41-0.21h-10a0.5 0.5 0 0 0-0.47 0.67l4.06 11.33c0.22 0.61 0.77 1 1.41 1s1.2-0.39 1.41-1l4.06-11.33a0.5 0.5 0 0 0-0.06-0.46z"
          fill="#DDBE99"
        />
        <path
          d="M17.92 5.53c-0.46-2.9-2.94-5.03-5.92-5.03s-5.45 2.13-5.92 5.03a3 3 0 0 0-2.58 2.97c0 1.65 1.35 3 3 3h5.5v2.75a0.75 0.75 0 1 0 1.5 0v-2.75h4c1.65 0 3-1.35 3-3a3 3 0 0 0-2.58-2.97z"
          fill="#ED69AB"
        />
      </g>
    </svg>
  );
}

export default IceCream22;
