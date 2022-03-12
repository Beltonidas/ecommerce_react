import React from 'react'

const DownArrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-down"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
    </svg>
  )

export default DownArrow