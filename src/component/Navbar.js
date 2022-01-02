import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            Navbar
            <span className="badge bg-primary mx-2">
              {this.props.countList}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
