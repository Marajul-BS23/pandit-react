import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
  disableBtn = () => {
    if (this.state.count === 1) return true;
    else return false;
  };
  removeBtn = () => {
    const val = this.props.Id;
    console.log(val);
    this.props.remove(val);
  };
  render() {
    return (
      <div>
        <div className="d-flex py-2">
          <h5 className="m-2">Quantity</h5>
          <button
            disabled={this.disableBtn()}
            className="btn btn-primary btn-sm"
            onClick={this.handleDecrement}
          >
            -
          </button>

          <p className="m-2">{this.state.count}</p>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={this.removeBtn}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
