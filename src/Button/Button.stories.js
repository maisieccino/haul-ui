import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action, configureActions } from "@storybook/addon-actions";
import Button from "./";

action("button-click");

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Button onClick={action("button-click")}>{text("label", "Click Me")}</Button>
));
