import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import MyNavbar from './MyNavbar';
import Compare from './Compare';

// import BackgroundImage from '../assets/background.png';



class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
        this.signOut = this.signOut.bind(this);
        this.pickPage = this.pickPage.bind(this);
        this.updateStateUser = this.updateStateUser.bind(this);
    }

    componentDidMount() {
        // this.state.user.id ? this.setState({showThisPage: 'profile'}) : this.setState({showThisPage: 'login'});
        console.log('*** ContentArea.props ***', this.props);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.user !== this.props.user) {
        //     this.setState({user: this.props.user});
        // }
    }

    signOut = () => {
        this.setState({user: {}});
        // this.setState({showThisPage: 'login'});
        window.location('/');
    };

    pickPage = (page) => {
        // @DESC picks a page to display
        this.setState({showThisPage: page});
        console.log(`*** pickPage() ***`, page);
    };

    updateStateUser = (newUser) => {
        // @DESC update the user in this root component's state.
        this.setState({user: newUser});
        console.log('*** lol updating ContentArea.state.user ***', newUser);
    };

    render() {

        // const rootDiv = {height: '100vh', width: '100vw', display: 'block', position: 'relative'};
        // const navbarContainer = {backgroundColor: 'green', width: '100%', margin: '0', padding: '0'};

        return (
            <React.Fragment>
                <div className="root-div container-fluid">
                    {/*<div className="navbar-container" style={navbarContainer}>*/}
                        <MyNavbar user={this.state.user || {}} signOut={this.signOut} pickPage={this.pickPage} />

                    <button className="btn btn-sm btn-outline-danger" onClick={() => console.log('*** print ContentArea.state ***', this.state)}>print ContentArea.state</button>
                    {/*</div>*/}

                    <Route exact path="/" render={() => <Login user={this.state.user || {}} />} />
                    <Route path="/profile" render={() => <Profile user={this.state.user} updateStateUser={this.updateStateUser} pickPage={this.pickPage} />} />
                    <Route path="/compare" render={() => <Compare user={this.state.user} /> } />

                    {/*display pages*/}
                    {/*{this.state.showThisPage === 'login' &&*/}
                        {/*<Login user={this.state.user} pickPage={this.pickPage} />}*/}
                    {/*{this.state.showThisPage === 'profile' &&*/}
                        {/*<Profile user={this.state.user} pickPage={this.pickPage} />}*/}
                    {/*{this.state.showThisPage === 'compare' &&*/}
                        {/*<Compare user={this.state.user} pickPage/>}*/}


                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
