import React from "react";
import { connect } from "react-redux";
import history from "../history";
import "./style.css";
import { authenticateUser } from "../actions";

class Login extends React.Component {
  state = {
    userName: null,
    pswd: null
  };

  componentDidUpdate = prevProps => {
    if (this.props.isLoggedIn) {
      history.push("/search");
    }
  };
  onChangeField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onLoginClick = () => {
    this.props.authenticateUser(this.state.userName, this.state.pswd);
  };
  render() {
    let { userName, pwd } = this.state;
    return (
      <div className="ui center aligned middle aligned grid login-container">
        <div className="column login-module">
          <h2 className="ui teal center aligned header">
            Log-in to your account
          </h2>
          <div className="ui stacked segment">
            <div className="ui large form">
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="User Name"
                    name="userName"
                    value={userName}
                    onChange={this.onChangeField}
                    type="text"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="Password"
                    type="password"
                    name="pswd"
                    value={pwd}
                    onChange={this.onChangeField}
                  />
                  <i aria-hidden="true" className="lock icon"></i>
                </div>
              </div>
              <button
                className="ui teal large fluid button"
                onClick={this.onLoginClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId
});

const LoginContainer = connect(mapStateToProps, {
  authenticateUser
})(Login);
export default LoginContainer;
