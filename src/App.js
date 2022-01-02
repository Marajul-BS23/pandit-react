import Navbar from "./component/Navbar";
import Counter from "./component/Counter";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      componentNumber: 0,
    };
  }

  // addIncrement = () => {
  //   const arr = this.state.list;
  //   arr.push(this.state.componentNumber);
  //   this.setState({ componentNumber: this.state.componentNumber + 1 });
  //   this.setState({ list: arr });
  // };

  // deleteCounter = (deleteIndex) => {
  //   const arr = this.state.list;
  //   const newArray = arr.filter((index) => {
  //     return index !== deleteIndex;
  //   });
  //   this.setState({ list: newArray });
  // };
  btnStyle = {
    backgroundColor: "red",
    padding: "10px",
  };
  arr = ["a", "b", "c", "e"];
  render() {
    return (
      <div>
        <button disabled={true} className={this.btnStyle}>
          CLick Me
        </button>
        this.arr.map(name => {
          return(
            <li>{name}</li>
          );
        })
        {/* <Navbar countList={this.state.list.length} /> */}

        {/* <div className="main-div">
          <button
            className="btn btn-primary btn-sm"
            onClick={this.addIncrement}
          >
            Add
          </button>
          {this.state.list.map((value) => {
            return (
              <Counter key={value} Id={value} remove={this.deleteCounter} />
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default App;
