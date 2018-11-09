import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // bind methods here
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {

    }

    onClick = () => {
        console.log('*** lol u clicked a thing ***');
    };

    render() {
        return (
            <React.Fragment>

                <div className="">
                    <Navbar className="my-navbar" justified>

                        <NavbarBrand href="#" className="mr-auto">
                            {/*<img id="home" name="home" className="navbar-brand" src={Brand} alt="" onClick={this.onClick} />*/}
                            whatMusic
                        </NavbarBrand>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink id="user" name="user" onClick={this.onClick} href="#">My Profile</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="compare" name="compare" onClick={this.onClick} href="#">Compare Music</NavLink>
                            </NavItem>

                        </Nav>

                    </Navbar>
                </div>

            </React.Fragment>
        );
    }

}

export default MyNavbar;