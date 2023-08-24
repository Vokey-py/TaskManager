import React from "react";
import Header from "./Header";
import {thunkLogout} from "../../redux/reducerAuth";
import {connect} from "react-redux";

class HeaderApiContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {thunkLogout})(HeaderApiContainer);