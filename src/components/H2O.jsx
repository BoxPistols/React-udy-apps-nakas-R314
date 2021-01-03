import { color } from 'ansi-styles'
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
            temp: this.state.temp + 10
        })
    }
    tempControll_Minus = () => {
        this.setState({
            temp: this.state.temp - 10
        })
    }
    /* Phase */
    H20State(x) {
        if (x < 10) {
            console.log('寒い！')
        }
    }
    /* Render */
    render() {
        return (
            <div>
                <h1 style={{color: 'red'}}>H2O</h1>
                <h2>現在の室温：{this.state.temp}
                    ℃</h2>
                <h3>Phase: {this.H20State(this.state.temp)}</h3>
                <button onClick={this.tempControll_Plus}>+</button>
                <button onClick={this.tempControll_Minus}>-</button>
            </div>
        )
    }
}
