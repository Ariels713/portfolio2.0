import React from "react";

function Frame(props) {
  const title = props.title || "Frame";

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>

      <g id="Group">
        <path
          id="Head"
          d="M15.65 3.36c0.79-0.82 1.56-1.07 1.58-1.07-1.01 0.09-1.84 0.31-2.5 0.56a6.53 6.53 0 0 0-1.98-0.53c1.67-1.37 3.07-1.9 3.07-1.89-7.21 1.32-8.91 4.26-8.91 4.26a6.58 6.58 0 0 0-1.54 4.27c0 3.69 2.99 6.67 6.66 6.67a6.67 6.67 0 0 0 3.62-12.27z"
          fill="#EA6379"
        />
        <g id="left_leg">
          <path
            id="Vector"
            d="M6.3 22.37s0.03 0.61-0.63 0.66a0.46 0.46 0 0 1-0.19-0.37c0-0.25 0.2-0.46 0.47-0.46 0.14 0 0.27 0.06 0.35 0.17z"
            fill="#F2AABB"
          />
          <path
            id="Vector_2"
            d="M8.6 19.42v-8.87h1.09v9.1c-0.38-0.19-1.11-0.23-1.09-0.23z"
            fill="#EA6379"
          />
          <path
            id="Vector_3"
            d="M8.6 19.85v-0.43s0.72 0.03 1.09 0.23v0.48a3.3 3.3 0 0 0-1.09-0.28z"
            fill="#C83C5A"
          />
          <path
            id="Vector_4"
            d="M6.3 22.37a0.46 0.46 0 0 1 0.11 0.29c0 0.25-0.2 0.46-0.46 0.47a0.48 0.48 0 0 1-0.28-0.1c0.64-0.05 0.62-0.66 0.63-0.66z"
            fill="#CF4162"
          />
          <path
            id="Vector_5"
            d="M6.81 21.19s0.03 0.61-0.62 0.65a0.44 0.44 0 0 1-0.19-0.37c0-0.25 0.2-0.46 0.47-0.45a0.46 0.46 0 0 1 0.34 0.17z"
            fill="#F2AABB"
          />
          <path
            id="Vector_6"
            d="M6.81 21.19a0.46 0.46 0 0 1 0.11 0.28c0 0.25-0.2 0.46-0.45 0.46a0.46 0.46 0 0 1-0.28-0.09c0.64-0.05 0.62-0.66 0.62-0.65z"
            fill="#CF4162"
          />
          <path
            id="Vector_7"
            d="M11.67 23.16c0 0.13-0.01 0.26-0.03 0.4h-6.6a3.32 3.32 0 0 1 0.15-1.45 3.32 3.32 0 0 1 0.75-1.25 3.32 3.32 0 0 1 2.66-1.01 3.3 3.3 0 0 1 1.09 0.28c1.17 0.52 1.97 1.68 1.98 3.03z m-4.75-1.69a0.41 0.41 0 0 0-0.11-0.28 0.46 0.46 0 0 0-0.34-0.17c-0.25 0-0.46 0.2-0.47 0.45 0 0.15 0.07 0.29 0.19 0.37a0.46 0.46 0 0 0 0.28 0.09c0.25 0 0.46-0.2 0.45-0.46z m-0.51 1.19a0.41 0.41 0 0 0-0.11-0.29 0.48 0.48 0 0 0-0.35-0.17c-0.25 0-0.46 0.2-0.47 0.46a0.46 0.46 0 0 0 0.19 0.37c0.07 0.06 0.17 0.09 0.28 0.1 0.25 0 0.46-0.2 0.46-0.47z"
            fill="#EA6379"
          />
        </g>
        <g id="right_leg">
          <path
            id="Vector_8"
            d="M16.8 21.19a0.46 0.46 0 0 0-0.1 0.28c0 0.25 0.2 0.46 0.47 0.46 0.09 0 0.19-0.03 0.26-0.09-0.65-0.05-0.62-0.66-0.63-0.65z"
            fill="#CF4162"
          />
          <path
            id="Vector_9"
            d="M16.8 21.19s-0.03 0.61 0.63 0.65a0.46 0.46 0 0 0 0.16-0.23 0.46 0.46 0 0 0-0.16-0.5 0.46 0.46 0 0 0-0.26-0.09 0.46 0.46 0 0 0-0.37 0.17z"
            fill="#F2AABB"
          />
          <path
            id="Vector_10"
            d="M15.01 10.55h-1.08v9.1c0.38-0.19 1.11-0.23 1.08-0.23v-8.87z"
            fill="#EA6379"
          />
          <path
            id="Vector_11"
            d="M16.7 21.47c0-0.11 0.03-0.21 0.1-0.28a0.46 0.46 0 0 1 0.37-0.17 0.46 0.46 0 0 1 0.42 0.59 0.46 0.46 0 0 1-0.16 0.23 0.46 0.46 0 0 1-0.26 0.09c-0.25 0-0.46-0.2-0.47-0.46z m0.98 0.73a0.46 0.46 0 0 1 0.44 0.32 0.46 0.46 0 0 1-0.18 0.51 0.5 0.5 0 0 1-0.26 0.1c-0.25 0-0.46-0.2-0.47-0.47 0-0.11 0.03-0.21 0.11-0.29 0.09-0.09 0.21-0.17 0.36-0.17z m0.9 1.36a3.32 3.32 0 0 0-0.81-2.6 3.32 3.32 0 0 0-2.49-1.12 3.58 3.58 0 0 0-0.27 0.01 3.3 3.3 0 0 0-1.08 0.28 3.35 3.35 0 0 0-1.98 3.03c0 0.13 0.01 0.26 0.02 0.4h6.61z"
            fill="#EA6379"
          />
          <path
            id="Vector_12"
            d="M17.32 22.37a0.46 0.46 0 0 0-0.11 0.29c0 0.25 0.2 0.46 0.47 0.47 0.09 0 0.19-0.03 0.26-0.1-0.65-0.05-0.62-0.66-0.62-0.66z"
            fill="#CF4162"
          />
          <path
            id="Vector_13"
            d="M13.93 19.65v0.48a3.3 3.3 0 0 1 1.08-0.28v-0.43s-0.72 0.03-1.08 0.23z"
            fill="#C83C5A"
          />
          <path
            id="Vector_14"
            d="M18.14 22.66a0.46 0.46 0 0 0-0.46-0.46c-0.14 0-0.27 0.06-0.36 0.17 0 0-0.03 0.61 0.62 0.66a0.46 0.46 0 0 0 0.2-0.37z"
            fill="#F2AABB"
          />
        </g>
        <g id="left_eye">
          <path
            id="Vector_15"
            d="M6.45 7.39c0-1.03 0.84-1.87 1.87-1.88 1.03 0 1.87 0.84 1.89 1.88 0 1.03-0.84 1.87-1.89 1.87-1.03 0-1.87-0.84-1.87-1.87z m3.02 0.53a0.32 0.32 0 0 0-0.32-0.33 0.32 0.32 0 0 0-0.32 0.33 0.32 0.32 0 0 0 0.32 0.32 0.32 0.32 0 0 0 0.32-0.32z m-0.93-1.19c0-0.36-0.29-0.66-0.65-0.65-0.36 0-0.66 0.29-0.65 0.65s0.29 0.66 0.65 0.66c0.36 0 0.65-0.29 0.65-0.66z"
            fill="#063E51"
          />
          <path
            id="Vector_16"
            d="M8.32 4.17a3.22 3.22 0 0 1 3.2 3.01 3.43 3.43 0 0 1-3.4 2.97c-1.02 0-1.94-0.44-2.58-1.17a3.02 3.02 0 0 1-0.42-1.59c0-1.78 1.44-3.22 3.2-3.22z m1.89 3.22c0-1.03-0.84-1.87-1.89-1.88-1.03 0-1.87 0.84-1.87 1.88 0 1.03 0.84 1.87 1.87 1.87s1.87-0.84 1.89-1.87z"
            fill="#fff"
          />
          <path
            id="Vector_17"
            d="M7.24 6.73c0-0.36 0.29-0.66 0.65-0.65a0.64 0.64 0 0 1 0.65 0.65c0 0.36-0.29 0.66-0.65 0.66s-0.66-0.29-0.65-0.66z"
            fill="#fff"
          />
          <path
            id="Vector_18"
            d="M9.15 7.59a0.32 0.32 0 0 1 0.32 0.33 0.32 0.32 0 0 1-0.32 0.32 0.32 0.32 0 0 1-0.32-0.32 0.32 0.32 0 0 1 0.32-0.33z"
            fill="#fff"
          />
          <path
            id="Vector_19"
            d="M11.54 7.39c0 1.78-1.44 3.2-3.22 3.2-1.19 0-2.23-0.65-2.78-1.61 0.64 0.71 1.55 1.17 2.58 1.17a3.44 3.44 0 0 0 3.4-2.97c0 0.07 0.01 0.13 0.02 0.21z"
            fill="#B2B1B0"
          />
        </g>
        <g id="right_eye">
          <path
            id="Vector_20"
            d="M16.59 7.6c0.18 0 0.32 0.14 0.33 0.34 0 0.18-0.14 0.32-0.33 0.32a0.32 0.32 0 0 1-0.32-0.32 0.32 0.32 0 0 1 0.32-0.34z"
            fill="#fff"
          />
          <path
            id="Vector_21"
            d="M14.68 6.75c0-0.36 0.29-0.66 0.65-0.65s0.66 0.29 0.66 0.65c0 0.36-0.29 0.65-0.66 0.65a0.64 0.64 0 0 1-0.65-0.65z"
            fill="#fff"
          />
          <path
            id="Vector_22"
            d="M17.65 7.4c0 1.03-0.84 1.87-1.88 1.89-1.03 0-1.87-0.84-1.88-1.89 0-1.03 0.84-1.87 1.88-1.87 1.03 0 1.87 0.84 1.88 1.87z m-0.73 0.54c0-0.18-0.14-0.32-0.33-0.34a0.32 0.32 0 0 0-0.24 0.11 0.32 0.32 0 0 0-0.08 0.23 0.32 0.32 0 0 0 0.32 0.32c0.18 0 0.32-0.14 0.33-0.32z m-1.59-1.84c-0.36 0-0.65 0.29-0.65 0.65 0 0.36 0.29 0.65 0.65 0.65s0.66-0.29 0.66-0.65c0-0.36-0.29-0.66-0.66-0.65z"
            fill="#063E51"
          />
          <path
            id="Vector_23"
            d="M18.97 7.4c0 1.78-1.44 3.22-3.2 3.21-1.19 0-2.23-0.65-2.78-1.6a3.44 3.44 0 0 0 5.98-1.8c0 0.07 0.01 0.13 0 0.19z"
            fill="#B2B1B0"
          />
          <path
            id="Vector_24"
            d="M17.65 7.4c0-1.03-0.84-1.87-1.88-1.87-1.03 0-1.87 0.84-1.88 1.87 0 1.03 0.84 1.87 1.88 1.89 1.03 0 1.87-0.84 1.88-1.89z m-5.09 0c0-1.78 1.44-3.22 3.21-3.2 1.7 0 3.11 1.33 3.2 3.01a3.43 3.43 0 0 1-3.4 2.96c-1.02 0-1.94-0.44-2.58-1.16-0.27-0.47-0.43-1.02-0.43-1.61z"
            fill="#fff"
          />
        </g>
        <g id="mouth">
          <path
            id="Vector_25"
            d="M8.96 11.78h6.16a3.07 3.07 0 0 1-1.7 2.4 0.64 0.64 0 0 0-0.06-0.06c-0.21-0.24-0.68-0.41-1.23-0.43l-0.1 0.09-0.1-0.09c-0.55 0.03-1.01 0.19-1.23 0.43a0.37 0.37 0 0 0-0.05 0.06 3.11 3.11 0 0 1-1.69-2.4z"
            fill="#1E1F1D"
          />
          <path
            id="Vector_26"
            d="M10.7 14.12c0.01 0.01 0.56 0.27 1.33 0.27s1.31-0.27 1.33-0.27l0.06 0.06c-0.42 0.2-0.88 0.32-1.39 0.33-0.5 0-0.97-0.12-1.38-0.33 0.01-0.02 0.03-0.04 0.05-0.06z"
            fill="#B01C1C"
          />
          <path
            id="Vector_27"
            d="M10.7 14.12c0.21-0.24 0.68-0.42 1.23-0.43l0.1 0.09 0.1-0.09c0.55 0.03 1.01 0.19 1.23 0.43-0.01 0.01-0.56 0.27-1.33 0.27-0.77 0-1.31-0.27-1.33-0.27z"
            fill="#E52923"
          />
        </g>
      </g>
    </svg>
  );
}

export default Frame;
