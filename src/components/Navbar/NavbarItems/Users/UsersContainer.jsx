import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader/Preloader";
import {withAuthRedirec} from "../../../../hoc/withAuthRedirec";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../../redux/selectors/user-selector";


class UsersAPIContainer extends React.Component{

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.requestUsers(p, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

let dispatch = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
}

export default compose(
    connect(mapStateToProps, dispatch),
    withAuthRedirec)(UsersAPIContainer)