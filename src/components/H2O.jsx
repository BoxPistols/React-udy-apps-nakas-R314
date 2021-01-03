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
        const {temp} = this
            .state
            this
            .setState({
                temp: temp + 10
            })
    }
    tempControll_Minus = () => {
        const {temp} = this
            .state
            this
            .setState({
                temp: temp - 10
            })
    }
    /* Phase */
    H20State(_x, _c) {
        if (_x < 0) {
            // console.log('寒い！')
            return _c = 'cold'
        } else if (_x > 100) {
            // console.log('熱い！')
            return _c = 'hot'
        } else {
            return _c = 'normal'
        }
    }
    /* Render */
    render() {
        const {temp} = this.state
        return (
            <div>
                <h1 className={this.H20State(temp)}>H2O</h1>

                <h2>現在の室温：{temp}
                    ℃</h2>
                {/*
                    * this.H20State = フェーズを取得する手法として、tempの数値を仮引数であてる
                    */
                }
                <h3>Phase: {this.H20State(temp)}</h3>

                <button onClick={this.tempControll_Plus}>+</button>
                <button onClick={this.tempControll_Minus}>-</button>
            </div>
        )
    }
}
