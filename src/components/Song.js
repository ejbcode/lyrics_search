import React from "react";

const Song = ({ ...data1 }) => {
  if (data1.error)
    return <p className="flow-text letra lyrics"> {data1.error}</p>;
  return (
    <div className="center  ">
      <h3 className="title_song">{data1.song}</h3>
      <p className="flow-text letra lyrics">{data1.lyrics}</p>
    </div>
  );
};

export default Song;
