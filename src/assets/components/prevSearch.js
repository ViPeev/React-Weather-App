import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function PrevSearchDisplay({ prevData, searchFunct }) {
  let [prevSearches, clearPrevSearches] = useState(prevData.slice(0, 5));
  let searchDisplay;

  let clearFunct = () => {
    localStorage.removeItem("prevSearches");
    clearPrevSearches([]);
  };

  let prevSearchButtons = prevSearches.map((elem, index) => {
    return (
      <button key={index} type="button" onClick={() => searchFunct(elem.town)}>
        {elem.town}, {elem.country}
      </button>
    );
  });

  searchDisplay = prevSearches.length ? (
    <React.Fragment>
      <p className="text-underline button-label">Previous Searches:</p>
      <div className="button-container">
        {prevSearchButtons}
        <button className="clear-button" type="button" onClick={clearFunct}>
          <FontAwesomeIcon icon={faTrashCan} />
          <span>Clear</span>
        </button>
      </div>
    </React.Fragment>
  ) : null;

  return (
    <main className="prompt-container">
      <p>Enter the desired location above</p>
      {searchDisplay}
    </main>
  );
}

export default PrevSearchDisplay;
