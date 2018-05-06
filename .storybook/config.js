import { configure } from "@storybook/react";
import "../src/vars.css";
import "../src/app.css";

const req = require.context("../src/", true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
