import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData, thunkGetAuth} from "../../redux/reducerAuth";
import {connect} from "react-redux";

class HeaderApiContainer extends React.Component {

    componentDidMount() {
        this.props.thunkGetAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {thunkGetAuth})(HeaderApiContainer);