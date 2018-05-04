import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";

import "./card.css";

const iconProps = {
  size: 30,
  color: "#ffffff",
};

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    contexts: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.node,
    progress: PropTypes.number,
    progressMax: PropTypes.number,
  };
  static defaultProps = {
    title: "<No title provided>",
    contexts: [],
    icon: <Icon.File {...iconProps} />,
    progress: 0,
    progressMax: 0,
  };

  render() {
    const { title, contexts, icon, progress, progressMax } = this.props;
    return (
      <div className="card">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{contexts.map(ctx => `#${ctx}`).join(" ")}</p>
        <div className="flex-horz">
          {progress && progressMax ? (
            <Fragment>
              <progress value={progress} max={progressMax} className="flex" />
              <p className="cardText progressText">
                {progress}/{progressMax}
              </p>
            </Fragment>
          ) : (
            ""
          )}
          {icon}
        </div>
      </div>
    );
  }
}
