import React from 'react'

const UpArrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-up"
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
      <path d="M12 5v14M18 11l-6-6M6 11l6-6" />
    </svg>
  )

export default UpArrow