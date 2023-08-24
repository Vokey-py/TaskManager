import {connect} from "react-redux";
import {thunkLogin} from "../../redux/reducerAuth";
import React from "react";
import Login from "./Login";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {thunkLogin} )(LoginContainer)