import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Brand from '../assets/brand.png';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        // bind methods here
        this.pickPage = this.pickPage.bind(this);
    }

    componentDidMount() {
        this.setState({user: this.props.user});
    }

    pickPage = (e) => {
        console.log(`*** navbar.pickPage(${e.target.name}) ***`);
        const page = e.target.name;
        this.props.pickPage(page);
    };

    render() {

        const divNavbar = {width: '100%', backgroundColor: 'green', margin: '0 auto', padding: '0'};

        return (
            <React.Fragment>

                <div className="new-attempt-closed">
                    {/*<div className="div-navbar container-fluid text-center" style={divNavbar}>*/}

                        {/*<div className="navbar sticky-top navbar-expand-md navbar-dark" style={{backgroundColor: "#F36D76"}}> /!*this makes the navbar pink*!/*/}
                            {/*<a href="#" className="navbar-brand" name="login" onClick={this.pickPage}>whatMusic</a>*/}
                            {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">*/}
                                {/*<span className="navbar-toggler-icon"></span>*/}
                            {/*</button>*/}

                            {/*<div className="collapse navbar-collapse justify-content-end" id="navbarOptions">*/}
                                {/*<ul className="navbar-nav">*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="#" className="nav-link"  name="profile" onClick={this.pickPage}>Profile</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="#" className="nav-link"  name="compare" onClick={this.pickPage}>Who's your friend?</a>*/}
                                    {/*</li>*/}
                                    {/*{this.state.user.id &&*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="#" className="nav-link" name="signOut" onClick={this.props.signOut}>Sign Out</a>*/}
                                    {/*</li>}*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>


                <Navbar dark style={{backgroundColor: '#F36D76'}}>

                    <NavbarBrand href='/' className="mr-auto ml-auto">
                        <img className="navbar-brand" src={Brand} alt="" />
                    </NavbarBrand>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/z0rs-org/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/about">About J.Ahn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

            </React.Fragment>
        );
    }

}

export default MyNavbar;