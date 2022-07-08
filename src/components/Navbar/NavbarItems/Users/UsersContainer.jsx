import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {withAuthRedirec} from "../../../../hoc/withAuthRedirec";
import {compose} from "redux";


class UsersAPIContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(p, this.props.pageSize).then(data =>{
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let dispatch = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
}

export default compose(
    connect(mapStateToProps, dispatch),
    withAuthRedirec,
    )(UsersAPIContainer)