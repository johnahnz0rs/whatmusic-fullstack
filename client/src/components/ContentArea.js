import React from 'react';
// import { Route } from 'react-router-dom';
// import User from './User';
import Profile from './Profile';
import Login from './Login';
import Navbar from './Navbar';
import Compare from './Compare';

import BackgroundImage from '../assets/background.png';



class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            showThisPage: ''
        };
        // declare methods here
        this.signOut = this.signOut.bind(this);
        this.pickPage = this.pickPage.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.state.user.id ? this.setState({showThisPage: 'profile'}) : this.setState({showThisPage: 'login'});
    }

    signOut = () => {
        this.setState({user: {}});
        this.setState({showThisPage: 'login'});
    };

    pickPage = (page) => {
        // @DESC picks a page to display
        this.setState({showThisPage: page});
        console.log(`*** pickPage() ***`, page);
    };

    updateUser = (newUser) => {
        // @DESC update the user in this root component's state.
    };

    render() {

        // const rootDiv = {height: '100vh', width: '100vw', display: 'block', position: 'relative'};
        const navbarContainer = {backgroundColor: 'green', width: '100%', margin: '0', padding: '0'};

        return (
            <React.Fragment>
                <div className="root-div container-fluid">
                    <div className="navbar-container" style={navbarContainer}>
                        <Navbar user={this.state.user} signOut={this.signOut} pickPage={this.pickPage} />
                    </div>

                    {/*<Route exact path="/" component={Login} />*/}
                    {/*<Route path="/user" component={User} />*/}
                    {/*<Route path="/profile" render={() => <Profile user={this.state.user} pickPage={this.pickPage} />} />*/}
                    {/*<Route path="/compare" render={() => <Compare user={this.state.user} /> } />*/}

                    {/*display pages*/}
                    {this.state.showThisPage === 'login' &&
                        <Login user={this.state.user} pickPage={this.pickPage} />}
                    {this.state.showThisPage === 'profile' &&
                        <Profile user={this.state.user} pickPage={this.pickPage} />}
                    {this.state.showThisPage === 'compare' &&
                        <Compare user={this.state.user} pickPage/>}


                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
