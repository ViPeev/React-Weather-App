import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function ErrorPrompt() {
  return (
    <main className="prompt-container">
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <p>Unfortunately, the searched location could not be found!</p>
      <p className="text-underline">Please, try again!</p>
    </main>
  );
}

export default ErrorPrompt;
