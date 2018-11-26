import React from 'react';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        // bind methods here
        this.showThisPage = this.showThisPage.bind(this);
    }

    componentDidMount() {
    }


    showThisPage = (e) => {
        const page = e.target.name;
        this.props.showThisPage(page);
    };

    render() {


        // const divNavbar = {width: '100%', backgroundColor: 'green', margin: '0 auto', padding: '0'};
        const navbar = {

            // backgroundColor: 'white',
            // marginBottom: '627px'
        };
        const navbarBrand = {
            width: '150px',
            height: 'auto'
        };

        const navLink = {
            /*marginLeft: 0.5em;*/
            marginRight: '1em'
        };


        return (
            <React.Fragment>

                {/* home = myMusic = friends = nearby = rando */}
                <nav className="navbar navbar-expand-sm navbar-light container-fluid fixed-top" style={{backgroundColor: '#F36D76'}}>
                    {/* brand */}
                    <a className="navbar-brand" href="#">
                        <h1 name="home" className="navbar-brand" style={{color: 'white'}} onClick={this.showThisPage}>whatMusic </h1>
                    </a>
                    {/* toggler icon */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*navbar*/}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-1" style={{}}>
                                <a name="mymusic" className="nav-link" href="#" onClick={this.showThisPage}>My Music</a>
                            </li>
                            <li className="nav-item mr-1" style={{}}>
                                <a name="friends" className="nav-link" href="#" onClick={this.showThisPage}>Search for Friends</a>
                            </li>
                            <li className="nav-item mr-1" style={{}}>
                                <a name="nearby" className="nav-link" href="#" onClick={this.showThisPage}>Find Nearby</a>
                            </li>
                            <li className="nav-item mr-1" style={{}}>
                                <a name="rando" className="nav-link" href="#" onClick={this.showThisPage}>Meet a Rando</a>
                            </li>
                        </ul>
                    </div>




                </nav>



            </React.Fragment>
        );
    }

}

export default MyNavbar;