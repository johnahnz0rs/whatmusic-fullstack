import React from 'react';
import { Route } from 'react-router-dom';
import User from './User';
// import Profile from './Profile';
import Login from './Login';
import MyNavbar from './MyNavbar';



const ContentArea = props => {

    return (
        <React.Fragment>
            <div className="root-div">
                {/*<Route exact path="/" component={Login} />*/}
                {/*<Route path="/user" component={User} />*/}
                {/*<Route path="/profile/:id" component={Profile} />*/}

                <ul className="nav"

                <MyNavbar />
                <p>lol world</p>




            </div>
        </React.Fragment>
    );

};

export default ContentArea;
