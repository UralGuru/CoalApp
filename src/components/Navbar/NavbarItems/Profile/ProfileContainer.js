import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, saveProfile, savePhoto, updateStatus} from "../../../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";
import {Navigate} from "react-router-dom";
import {withAuthRedirec} from "../../../../hoc/withAuthRedirec";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        };
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'} />;
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     updateStatus={this.props.updateStatus}/>
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
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveProfile, savePhoto}),
    withRouter,
    withAuthRedirec,
)(ProfileContainer)