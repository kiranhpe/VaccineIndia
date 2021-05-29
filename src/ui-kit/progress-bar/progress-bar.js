import React, { Component } from "react";
import './progress-bar.scss';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div className='slider'>
          <div className="line"></div>
          <div className="subline inc"></div>
          <div className="subline dec"></div>
        </div>
    );
  }
}
