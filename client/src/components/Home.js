import React from 'react';

import MyNavbar from './MyNavbar';
import HomeScreen from './HomeScreen';
import MyMusic from './MyMusic';
import Friends from './Friends';
import Nearby from './Nearby';
import Rando from './Rando';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisPage: 'home',
        };
        // declare methods here
        this.showThisPage = this.showThisPage.bind(this);
    }

    componentDidMount() { }

    showThisPage = (page) => {
        this.setState({showThisPage: page});
    };



    render() {





        return(<React.Fragment>
            <div className="" style={{}}>

                <MyNavbar />

                {this.state.showThisPage === 'home' && <HomeScreen />}
                {this.state.showThisPage === 'mymusic' && <MyMusic />}
                {this.state.showThisPage === 'friends' && <Friends />}
                {this.state.showThisPage === 'nearby' && <Nearby />}
                {this.state.showThisPage === 'rando' && <Rando />}





            </div>
        </React.Fragment>);
    }

}

export default Home;