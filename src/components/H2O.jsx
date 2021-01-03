import PropTypes from 'prop-types'
import React, {Component} from 'react'

export default class H2O extends Component {
    static propTypes = {
        prop: PropTypes
    }

    /* consrtuctor */
    constructor(props) {
        super(props)

        this.state = {
            temp: 24
        }
    }

    /* Method */
    tempControll_Plus = () => {
        this.setState({
            temp: this.state.temp + 1
        })
    }
    tempControll_Minus = () => {
        this.setState({
            temp: this.state.temp - 1
        })
    }

    render() {
        return (
            <div>
                <h1>H2O</h1>
                <h2>現在の室温：{this.state.temp}
                    ℃</h2>
                <button onClick={this.tempControll_Plus}>+</button>
                <button onClick={this.tempControll_Minus}>-</button>
            </div>
        )
    }
}
