import React, { Component } from 'react'
import TrafficContext from './TrafficContext';

export default class CarProvider extends Component {
  constructor() {
    super();
    this.state = {
      signal: { color: 'red' },
    };
  }

  setColorState = (newColor) => {
    this.setState({signal: {color: newColor}})
  }

	render() {
    const initialState = {signalColor: this.state, changeSignal: this.setColorState}
		return (
			<TrafficContext.Provider value={initialState}>
        {this.props.children}
      </TrafficContext.Provider>
		)
	}
}