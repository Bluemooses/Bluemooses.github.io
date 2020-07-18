import React from "react";
import { useHistory } from "react-router-dom";
export default function About() {
  let history = useHistory();

  return (
    <div class="card">
      <p>This is designed to be a route!</p>
      <button className="backButton" onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  );
}
