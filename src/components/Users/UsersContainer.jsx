import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersAPIContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons =>{
                this.props.toggleIsFething(false);
                this.props.setUsers(respons.data.items);
                this.props.setTotalUsersCount(respons.data.totalCount);
            });
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p) ;
        this.props.toggleIsFething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(respons =>{
                this.props.toggleIsFething(false);
                this.props.setUsers(respons.data.items);
            });
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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        toggleIsFething: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);