import React from "react";

const Song = ({ ...data1 }) => {
  console.log(data1);
  return (
    <div className="center">
      <h3>Lyrics</h3>
      <p className="flow-text letra">{data1.lyrics}</p>
    </div>
  );
};

export default Song;
