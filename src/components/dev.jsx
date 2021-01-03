import React, {Component} from 'react';

class Dev extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "ジョニーウォーカー"
        }
    }

    // method
    onClickAction(){
        alert("Ulyhhh!")
    }
    render() {
        return (
        <div>
            <h2>俺の名前は{this.state.name}</h2>
            <button onClick={this.onClickAction}>発火させる</button>
        </div>)
    }
}
export default Dev