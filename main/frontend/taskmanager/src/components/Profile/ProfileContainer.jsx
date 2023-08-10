import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import withRouter from "../utils/utils";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
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

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);