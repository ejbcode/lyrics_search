import React, { useState } from "react";

const Form = ({ setSearch }) => {
  const [bandInfo, setBandInfo] = useState({ band: "", song: "" });
  const [error, setError] = useState(false);
  const { band, song } = bandInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (band.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(bandInfo);
  };

  const handleOnChange = (event) => {
    setBandInfo({
      ...bandInfo,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="row container">
      <div className="col s12">
        <form onSubmit={handleSubmit} className="row">
          <div className="input-field col s12 m6">
            <input
              id="bandid"
              type="text"
              className="validate"
              name="band"
              onChange={handleOnChange}
              required
              value={band}
            />
            <label htmlFor="bandid">Band´s Name</label>
            <span
              className="helper-text"
              data-error="Enter name of the band "
            ></span>
          </div>
          <div className="input-field col s12 m6">
            <input
              id="songid"
              type="text"
              className="validate"
              name="song"
              onChange={handleOnChange}
              required
              value={song}
            />
            <label htmlFor="songid">Song´s name</label>
            <span
              className="helper-text"
              data-error="Enter the song to search"
            ></span>
          </div>
          <button
            className="btn waves-effect waves-light col s12 m2 right"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
