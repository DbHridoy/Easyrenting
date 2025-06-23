import * as React from "react";
export const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#9333EA"
      d="M.455 16.907c0-8.837 7.164-16 16-16 8.837 0 16 7.163 16 16 0 8.836-7.163 16-16 16-8.836 0-16-7.164-16-16Z"
    />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M20.305 15.357h-1.9v-2.55h1.55c.276 0 .5-.2.5-.5v-2.65c0-.275-.2-.5-.5-.5h-1.824c-1.976 0-3.35 1.4-3.35 3.475v2.675h-2.2a.672.672 0 0 0-.675.675v1.8c0 .35.274.675.675.675h2.15v5.525c0 .35.274.675.675.675h2.35c.15 0 .274-.075.375-.175.1-.1.174-.275.174-.425v-5.575h1.651c.325 0 .575-.2.625-.5v-.05l.35-1.725a.748.748 0 0 0-.15-.575c-.05-.125-.275-.25-.476-.275Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8.455 8.907h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);

export const NavIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="m27.736 10.541-4.734 1.017-16.005 3.438-5.512 1.185A1.89 1.89 0 0 0 0 18.038v10.067C0 29.15.84 30 1.875 30h26.25A1.886 1.886 0 0 0 30 28.104v-15.71c0-.571-.256-1.112-.695-1.472a1.86 1.86 0 0 0-1.57-.38Z"
      />
      <path
        fill="url(#c)"
        d="M21.442 0H8.684C7.616 0 6.75.84 6.75 1.875v18.75c0 1.035.865 1.875 1.934 1.875h12.633c1.067 0 1.933-.84 1.933-1.875V1.875C23.25.84 22.384 0 21.442 0Z"
      />
      <path
        fill="url(#d)"
        d="M23.25 11.504v9.121c0 1.035-.866 1.875-1.933 1.875H8.684c-1.068 0-1.934-.84-1.934-1.875V15.05l.248-.053 16.005-3.44.248-.053h-.001Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={15}
        x2={15}
        y1={-4.5}
        y2={25.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FF8F" />
        <stop offset={1} stopColor="#00A1FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={6.75}
        x2={23.25}
        y1={0}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FF8F" />
        <stop offset={1} stopColor="#00A1FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={23.25}
        x2={4.003}
        y1={17.002}
        y2={17.002}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0048E5" />
        <stop offset={0.64} stopColor="#625AF5" />
        <stop offset={1} stopColor="#8A62FC" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
