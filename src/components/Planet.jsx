import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
class Planet extends React.Component {
  render() {
    let { planetData } = this.props;
    return (
      <div class="plannetContainer">
        <h5 class="ui box header">Plannet Details: </h5>
        <div class="ui teal segment">
          <div class="ui cardBox  card">
            <div class="content">
              <div class="header">{planetData.name}</div>
              <div class="meta"></div>
            </div>
            <div className="ui content">
              <div class="ui small feed">
                <div class="content">
                  <span class="right floated">{planetData.population}</span>
                  <b>population:</b>
                </div>
                <div class="content">
                  <span class="right floated">
                    {planetData.rotation_period}
                  </span>
                  <b>rotation_period:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.orbital_period}</span>
                  <b>orbital_period:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.diameter}</span>
                  <b>diameter:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.climate}</span>
                  <b>climate:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.gravity}</span>
                  <b>gravity:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.terrain}</span>
                  <b>terrain:</b>
                </div>
                <div class="content">
                  <span class="right floated">{planetData.surface_water}</span>
                  <b>surface_water:</b>
                </div>
              </div>
            </div>
            <div class="extra content">
              <div class="ui buttons">
                <Link to="/search" class="ui green basic button">
                  Back to Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("owProps:", ownProps.match.params);
  return {
    planetData: state.swapData.searchResult.filter(
      item => item.name == ownProps.match.params.id
    )[0]
  };
};

const PlannetContainer = connect(mapStateToProps)(Planet);
export default PlannetContainer;
