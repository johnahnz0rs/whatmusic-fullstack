import React from 'react';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.showThisPage = this.showThisPage.bind(this);
    }

    componentDidMount() { }

    showThisPage = (e) => {
        const page = e.target.name;
        this.props.showThisPage(page);

    };



    render() {
        return (<React.Fragment>
            <div>
                <button name="" className="btn btn-lg btn-outline-success" onClick={this.showThisPage}></button>
                <button name="" className="btn btn-lg btn-outline-success" onClick={this.showThisPage}></button>
                <button name="" className="btn btn-lg btn-outline-success" onClick={this.showThisPage}></button>
                <button name="" className="btn btn-lg btn-outline-success" onClick={this.showThisPage}></button>
            </div>
        </React.Fragment>);
    }

}

export default HomeScreen;