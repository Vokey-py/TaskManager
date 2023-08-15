import React from "react";
import Profile from "./Profile";
import {
    thunkGetStatusUserProfile,
    thunkGetUserProfile,
    thunkUpdateStatusUserProfile
} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import withRouter from "../utils/utils";
import {compose} from "redux";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 29771;
        }
        this.props.thunkGetUserProfile(userId)
        this.props.thunkGetStatusUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.thunkUpdateStatusUserProfile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        thunkGetUserProfile,
        thunkGetStatusUserProfile,
        thunkUpdateStatusUserProfile
    }),
)(ProfileAPIContainer)