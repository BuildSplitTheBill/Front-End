import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, NavLink, withRouter } from 'react-router-dom'

import {
  userLogin,
  userRegistration,
  userLogout,
  getToken,
  setInitialStateFetched,
  setLoggedInToTrue
} from './actions/credentialsActions'
import { fetchFriends, addFriend } from './actions/friendsActions'
import { fetchHomePageData } from './actions/dataActions'
import { fetchBills, addBill, payBill } from './actions/billsActions'
import { fetchUsers } from './actions/usersActions'

import axios from 'axios'

import HomeView from '../src/views/HomeView'
import FriendsView from './views/FriendsView'
import BillsView from './views/BillsView'
// import HistoryView from "./views/HistoryView";

import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import AddBillForm from './components/AddBillForm'
import BillPage from './components/BillPage'

import './css/index.css'

class App extends Component {
  componentDidMount() {
    const { getToken, setInitialStateFetched, setLoggedInToTrue } = this.props
    getToken()

    const token = localStorage.getItem('token')
    const options = {
      headers: {
        Authorization: token
      }
    }

    axios
      .get('https://split-the-bill-backend.herokuapp.com/', options)
      .then(res => {
        setInitialStateFetched()
        setLoggedInToTrue()
        this.props.fetchHomePageData(res.data)
        this.props.fetchFriends(res.data)
        this.props.fetchBills(res.data)
        this.props.fetchUsers(res.data)
      })
      .catch(err => {
        setInitialStateFetched()
        console.log(err)
      })
  }

  render() {
    const { fetchingInitialState } = this.props

    if (fetchingInitialState) {
      return <h1>Loading...</h1>
    }

    if (!this.props.loggedIn) {
      return (
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <LoginPage
                {...props}
                userLogin={this.props.userLogin}
                fetchFriends={this.props.fetchFriends}
              />
            )}
          />

          <Route
            path="/signup"
            render={props => (
              <RegistrationPage
                {...props}
                userRegistration={this.props.userRegistration}
              />
            )}
          />
        </React.Fragment>
      )
    }

    return (
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/bills">Bills</NavLink>
            <NavLink to="/add-bill-form">Add a Bill</NavLink>
            {/* <NavLink to="/history">History</NavLink> */}
            <NavLink to="/" onClick={() => this.props.userLogout()}>
              Log Out
            </NavLink>
          </nav>
        </div>

        <Route
          exact
          path="/"
          render={props => (
            <HomeView
              {...props}
              data={this.data}
              balancesData={this.props.balancesData}
            />
          )}
        />

        <Route
          path="/friends"
          render={props => (
            <FriendsView
              {...props}
              friends={this.props.friends}
              addFriend={this.props.addFriend}
              users={this.props.users}
            />
          )}
        />

        <Route
          exact
          path="/bills"
          render={props => (
            <BillsView
              {...props}
              balancesData={this.props.balancesData}
              bills={this.props.bills}
              payBill={this.props.payBill}
            />
          )}
        />
        <Route path="/bills/bill" render={props => <BillPage {...props} />} />

        <Route
          path="/add-bill-form"
          render={props => (
            <AddBillForm
              {...props}
              friends={this.props.friends}
              addBill={this.props.addBill}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.credentialsReducer.loggedIn,
  friends: state.friendsReducer.friends,
  options: state.credentialsReducer.options,
  fetchingInitialState: state.credentialsReducer.fetchingInitialState,
  balancesData: state.dataReducer.balancesData,
  bills: state.billsReducer.bills,
  users: state.usersReducer.users
})

export default withRouter(
  connect(
    mapStateToProps,
    {
      userLogin,
      userRegistration,
      userLogout,
      fetchFriends,
      addFriend,
      fetchHomePageData,
      fetchBills,
      getToken,
      setInitialStateFetched,
      setLoggedInToTrue,
      fetchUsers,
      addBill,
      payBill
    }
  )(App)
)
