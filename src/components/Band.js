import React from "react";

const Band = ({ ...data2 }) => {
  if (data2.artists === null)
    return <p className="flow-text letra lyrics">Artist Not Found</p>;
  if (Object.keys(data2).length === 0) return null;
  const {
    strArtist,
    strBiographyEN,
    strGenre,
    strWebsite,
    strTwitter,
    strArtistThumb,
    strFacebook,
  } = data2.artists[0];

  return (
    <div className="row song">
      <h3 className="center">{strArtist}</h3>
      <div className="col">
        <img className="responsive-img" src={strArtistThumb} alt={strArtist} />
      </div>
      <div className="col s12">
        <p>Gender: {strGenre}</p>
      </div>
      <div className="row ">
        <h5 className="col s12 biography_title">Biography</h5>
        <p className="biography_content">{strBiographyEN}</p>
      </div>
    </div>
  );
};

export default Band;
