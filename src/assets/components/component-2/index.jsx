import React from "react";
import "./style.scss";

class Component_2 extends React.Component{

    state = {
        input_1_value : '',
        input_2_value : '',
        multiply : 'Click Me'
    }

    input_1_Change = (e) =>{
        this.setState({input_1_value: e.target.value})
        console.log(this.state.input_1_value);
    }

    input_2_Change = (e) =>{
        this.setState({input_2_value: e.target.value})
        console.log(this.state.input_2_value);
    }

    inputsMultiply = () => {
        let sum = +this.state.input_1_value * +this.state.input_2_value
        console.log(sum);
        this.setState({multiply : sum});
        this.setState({input_1_value : ''})
        this.setState({input_2_value : ''})
    }

    render(){
        return <div className="multiplyBox">
            <input type="number" onChange={this.input_1_Change} value={this.state.input_1_value}/>
            <input type="number" onChange={this.input_2_Change} value={this.state.input_2_value}/>
            <button onClick={this.inputsMultiply}>{this.state.multiply}</button>
        </div>
    }

}

export default Component_2