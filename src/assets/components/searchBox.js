import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function SearchBox({handleSearch}) {
  let [query, setQuery] = useState("");

  const handleQuery = (evt) => {
    setQuery(evt.target.value);
  };

  const submit = (evt) => {
    evt.preventDefault();
    handleSearch(query.trim());
    setQuery("");
  }

  return (
    <form 
      onSubmit={submit}
      className="input-box">

      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        onChange={handleQuery}
        value={query}
        type="text"
        placeholder="Enter location..."
      ></input>
    </form>
  );
}

export default SearchBox;
