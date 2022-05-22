import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) { userId = 2};
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

let WithUrlContainerCmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlContainerCmponent);