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
    background: PropTypes.string,
  };
  static defaultProps = {
    title: "<No title provided>",
    contexts: [],
    icon: <Icon.File {...iconProps} />,
    progress: 0,
    progressMax: 0,
    background: "linear-gradient(45deg,var(--color-green),var(--color-mint))",
  };

  constructor(props) {
    super(props);
    this.cardEl = React.createRef();
  }

  updateBackground() {
    this.refs.card.style.setProperty(
      "--card-background",
      this.props.background,
    );
  }

  componentDidMount() {
    this.updateBackground();
  }

  componentDidUpdate() {
    this.updateBackground();
  }

  render() {
    const { title, contexts, icon, progress, progressMax } = this.props;
    return (
      <div className="card" ref="card">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{contexts.map(ctx => `#${ctx}`).join(" ")}</p>
        <div className="flex-horz">
          {progressMax ? (
            <Fragment>
              <progress value={progress} max={progressMax} className="flex" />
              <p className="cardText progressText">
                {progress || 0}/{progressMax}
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
