import React from "react";

function LogoLinkedin(props) {
  const title = props.title || "logo linkedin";

  return (
    <svg
      height="36"
      width="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M33.34 0h-30.69c-1.46 0-2.65 1.16-2.65 2.59v30.81c0 1.43 1.19 2.6 2.65 2.6h30.69c1.47 0 2.66-1.16 2.66-2.6v-30.8c0-1.43-1.19-2.6-2.66-2.6z"
          fill="#007BB5"
        />
        <path
          d="M5.33 13.5h5.35v17.17h-5.35v-17.17z m2.68-8.54a3.1 3.1 0 1 1-0.01 6.19 3.1 3.1 0 0 1 0.01-6.19"
          fill="#FFFFFF"
        />
        <path
          d="M14.03 13.5h5.12v2.34h0.07c0.71-1.35 2.45-2.78 5.05-2.77 5.41 0 6.4 3.56 6.41 8.18v9.42h-5.34v-8.35c0-1.99-0.03-4.55-2.78-4.55-2.78 0-3.2 2.17-3.2 4.41v8.5h-5.33v-17.18z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

export default LogoLinkedin;
