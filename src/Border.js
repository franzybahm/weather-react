import React from "react";
import "./styles.css";

import Search from "./Search.js";
import Forecast from "./Forecast.js";

export default function Border() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8 shadow p-3 mb-5 bg-body rounded main">
          <Search />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
