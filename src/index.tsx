import * as React from "react";
import * as ReactDOM from "react-dom";

import { LearnReact } from "./components/LearnReact";

declare global {
  interface Window {
    showComponent: () => void;
    destroyComponent: () => void;
  }
}

(function () {
  window.showComponent = () => {
    ReactDOM.render(
      <LearnReact instructor1="Kaushik" instructor2="Sakti" />,
      document.getElementById("example")
    );   
  }
  window.destroyComponent = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('example'))
  }
})();
