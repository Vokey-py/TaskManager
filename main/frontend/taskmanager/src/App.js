import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "./components/utils/utils";
import {thunkInitialized} from "./redux/reducerApp";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.thunkInitialized()
    }


    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login/*" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appMain.initialized
})

export default compose(
    withRouter,
    connect (mapStateToProps, {thunkInitialized}))(App);
