import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
// import App from "./App";
class SearchBar extends React.Component {
  state = { term: "", password_text: "" };
  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
          {this.state.term.length < 4 ? "please enter a valid password" : ""}
        </form>
      </div>
    );
  }
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<SearchBar />, document.querySelector("#root"));
