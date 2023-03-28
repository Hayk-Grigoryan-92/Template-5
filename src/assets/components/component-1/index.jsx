import React from "react";
import "./style.scss";

class Component_1 extends React.Component {

    state = {
        button_value: 'Click Me',
        my_value: ''

    }

    inputChange = (e) =>{
        this.setState({my_value: e.target.value})
        console.log(this.state.my_value);
    }

    buttonClick = () => {
      this.setState({button_value: this.state.my_value})
      this.setState({my_value:""})
    }


  render() {

    return (
      <div className="box-container">
        <input type="text" onChange={this.inputChange} value={this.state.my_value}/>
        <button onClick={this.buttonClick}>{this.state.button_value}</button>
      </div>
    );
  }
}

export default Component_1;
