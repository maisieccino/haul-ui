import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, array, number } from "@storybook/addon-knobs/react";
import Card from "./";

const contexts = ["work", "work/client_company"];
const stories = storiesOf("Card", module);

stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Card
    title={text("Title", "Client Company Invoice - September 2018")}
    contexts={array("Contexts", contexts)}
    progress={number("Progress", 5)}
    progressMax={number("Progress Max", 10)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-green),var(--color-mint))",
    )}
  />
));
