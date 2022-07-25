import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Border from "./Border.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Border />
  </StrictMode>
);
