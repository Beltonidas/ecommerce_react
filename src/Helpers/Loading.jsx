import React from "react";

function Loading({ texto }) {
  return (
    <div>
      <h3>{texto}</h3>
      <div className="spinner-grow text-success m-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success m-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success m-2" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
