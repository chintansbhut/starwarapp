import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import { plannetSearch, LogoutUser } from "../actions";
import "./style.css";
class Search extends React.Component {
  state = { searchString: "" };
  componentDidMount = () => {
    if (!this.props.isLoggedIn) {
      history.push("/");
    }
  };
  componentDidUpdate = prevProps => {
    if (!this.props.isLoggedIn) {
      history.push("/");
    }
  };
  onSearchChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.plannetSearch(event.target.value);
  };
  searchResultRender = result => {
    return result.map((item, index) => {
      let fontsize = `w_${index} font_size_${index} segmnt `;
      return (
        <div className={fontsize}>
          <Link to={`/planets/${item.name}`}>{item.name}</Link>
        </div>
      );
    });
  };
  onCLickLogout = () => {
    this.props.LogoutUser();
  };
  render() {
    let { searchResult } = this.props;
    return (
      <div class="ui  fluid container ">
        <div class="ui centered  grid padded ">
          <div class=" teal row">
            <div class="three wide column">SWAPI</div>
            <div class="nine wide column">
              <div class="ui icon fluid input">
                <input
                  type="text"
                  placeholder="Search..."
                  name="searchString"
                  onChange={this.onSearchChange}
                  value={this.state.searchString}
                />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
            <div class=" four wide column">
              <div class="item ">
                <button
                  class="ui button right floated"
                  onClick={this.onCLickLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="resultContainer">
          {searchResult.length ? this.searchResultRender(searchResult) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    searchResult: state.swapData.searchResult
  };
};

const SearchContainer = connect(mapStateToProps, { plannetSearch, LogoutUser })(
  Search
);
export default SearchContainer;
