import React, { Component } from 'react'
import CarContext from './CarContext';

export default class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };
  }

  setCarState = (car, bool) => {
    this.setState({[car]: bool})
  }

	render() {
    const initialState = {cars: this.state, moveCar: this.setCarState}
		return (
			<CarContext.Provider value={initialState}>
        {this.props.children}
      </CarContext.Provider>
		)
	}
}
