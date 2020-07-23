import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Song from "./components/Song";
import Band from "./components/Band";

function App() {
  const [search, setSearch] = useState({});
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const URL = `https://api.lyrics.ovh/v1/${search.band}/${search.song}`;
  const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search.band}`;

  useEffect(() => {
    const dataFromApi = async () => {
      if (Object.keys(search).length === 0) return;
      const response = await Promise.all([fetch(URL), fetch(URL2)]);
      const result1 = await response[0].json();
      const result2 = await response[1].json();
      setData1(result1);
      setData2(result2);
    };
    dataFromApi();
  }, [URL, URL2, search]);

  return (
    <>
      <Header />
      <Form setSearch={setSearch} />
      <div className="row container">
        <div className="col s12 m6">
          <Band {...data2} />
        </div>
        <div className="col s12 m6">
          <Song {...data1} song={search.song} />
        </div>
      </div>
    </>
  );
}

export default App;
