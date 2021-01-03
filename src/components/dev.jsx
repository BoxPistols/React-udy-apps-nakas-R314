import React, {Component} from 'react';

class Dev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "ジョニーウォーカー",
            count: 0
        }
    }

    // method
    /* アローがファンクションでThisの連動 */
    onClickAction = () => {
        // alert("Ulyhhh!")
        this.setState({
            name: this.state.name + "：ホワイトラベル",
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h2>俺の名前は{this.state.name}</h2>
                <h3>{this.state.count}本</h3>
                <button onClick={this.onClickAction}>発火させる</button>
            </div>
        )
    }
}
export default Dev