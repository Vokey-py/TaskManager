import React from "react";
import Profile from "./Profile";
import {thunkGetUserProfile} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import withRouter from "../utils/utils";

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
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export default connect(mapStateToProps, {
   thunkGetUserProfile})(withUrlDataContainerComponent);