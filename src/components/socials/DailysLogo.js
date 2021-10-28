import React from "react";

function Pacman(props) {
  const title = props.title || "pacman";

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
          d="M32.25 21.75a3.75 3.75 0 1 1 3.75-3.75 3.75 3.75 0 0 1-3.75 3.75z"
          fill="#ea9860"
        />
        <path
          d="M32.63 25.59l-13.16-7.59 13.15-7.59a0.75 0.75 0 0 0 0.28-1.03 17.25 17.25 0 1 0 0 17.24 0.75 0.75 0 0 0-0.28-1.03z"
          fill="#ffd764"
        />
        <path
          d="M20.25 8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 1 0 0-4.5z"
          fill="#444"
        />
      </g>
    </svg>
  );
}

export default Pacman;
