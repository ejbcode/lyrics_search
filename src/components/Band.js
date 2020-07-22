import React from "react";

const Band = ({ ...data2 }) => {
  if (Object.keys(data2).length === 0) return null;
  console.log(data2);
  return (
    <div>
      <p>info badn</p>
      <img src={data2.strArtistThumb} alt="" />
    </div>
  );
};

export default Band;
