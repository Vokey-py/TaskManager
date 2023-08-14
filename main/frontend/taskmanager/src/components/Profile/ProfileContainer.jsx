import React from "react";
import Profile from "./Profile";
import {thunkGetUserProfile} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import withRouter from "../utils/utils";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.thunkGetUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {thunkGetUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer)