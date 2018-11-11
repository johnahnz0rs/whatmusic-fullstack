import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // props
            user: {
                // id: '1234'
            },
            splashHashtags: {
                display: 'inline',
                listStyle: 'none',
                marginTop: 20
            },
        };
        // declare methods here
        this.signInWithSpotify = this.signInWithSpotify.bind(this);
    }

    componentDidMount() {
        this.setState({user: this.props.user});
        if (this.state.user) {
            // this.props.user.id ? this.props.pickPage('profile') : this.props.pickPage('login');
            if (this.state.user.id) {
                window.location = '/profile';
            }
        }
    }

    signInWithSpotify = () => {
        fetch('/api/login-spotify')
            .then(res => res.json())
            .then(() => this.props.pickPage('profile'));
    };

    render() {

        const spotifyLoginURL = 'http://localhost:5000/api/login-spotify';

        return(
            <React.Fragment>
                <div className="container-fluid login-comp-background">
                    <p>lol this is login</p>

                    <div className="row justify-content-center">
                        <div className="col-3">
                            &nbsp;
                        </div>
                        <div className="col-3">
                            <p>
                                <span className="font-italic font-weight-bold">Exploring each other's music</span>
                                <br />can be an intimate way to get to know your new friend(s).
                                <br />But sometimes,
                                <br />it's hard to articulate our favorite music.
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-3">
                            <p>
                                At <span className="font-italic"><span className="font-weight-bold">whatMusic</span>,
                                <br />we got your back.</span>
                                <br />We show you what music yous two both like, so you can start groovin' together.
                            </p>
                            <h5>Sign in below to get started!</h5>
                        </div>
                        <div className="col-3">
                            &nbsp;
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-4">
                            {/*<button className="btn btn-sm btn-primary" onClick={this.signInWithSpotify}>Sign in with Spotify</button>*/}
                            {/*<button className="btn btn-sm btn-primary" onClick={() => window.location=`api/login`}>Sign in with Spotify</button>*/}
                            <a href={spotifyLoginURL}><button className="btn btn-sm btn-primary">Sign in with Spotify</button></a>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}

export default Login;