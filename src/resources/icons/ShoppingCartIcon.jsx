import * as React from "react";

const ShoppingCartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-shopping-cart"
    width={22}
    height={23}
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="white"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={6} cy={19} r={2} />
    <circle cx={17} cy={19} r={2} />
    <path d="M17 17H6V3H4" />
    <path d="m6 5 14 1-1 7H6" />
  </svg>
);

export default ShoppingCartIcon;
