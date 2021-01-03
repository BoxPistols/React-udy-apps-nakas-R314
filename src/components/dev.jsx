import React, {Component} from 'react';

class Dev extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "ジョニーウォーカー"
        }
    }
    render() {
        return (
        <div>
            <h2>俺の名前は{this.state.name}</h2>
        </div>)
    }
}
export default Dev