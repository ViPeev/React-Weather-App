import React, { useRef, useState } from "react";
import SearchBox from "./assets/components/searchBox";
import Display from "./assets/components/display";
import "./App.css";

const api = {
  key: "90a0d07aa6c53d71a0dceb91d944a3ce",
  base: "http://api.openweathermap.org/data/2.5/",
};

let prevSearches = localStorage.getItem("prevSearches")
  ? JSON.parse(localStorage.getItem("prevSearches"))
  : [];

function App() {
  let [data, setData] = useState(undefined);

  const loader = useRef(null);

  const search = (query) => {
    if (query) {
      loader.current.style.display = "block";
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            return res.reject();
          }
          return res.json();
        })
        .then((resp) => {
          setData(resp);
          prevSearches.unshift({ town: query, country: resp.sys.country });
          localStorage.setItem("prevSearches", JSON.stringify(prevSearches));
        })
        .catch(() => {
          setData("Error");
        })
        .finally(() => {
          loader.current.style.display = "none";
        });
    }
  };

  return (
    <React.Fragment>
      <header>
        <nav>
          <SearchBox handleSearch={search} />
        </nav>
        <div ref={loader} className="loader"></div>
      </header>
      <Display
        handleData={data}
        prevData={prevSearches}
        handleSearch={search}
      />
    </React.Fragment>
  );
}

export default App;
