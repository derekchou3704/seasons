import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {
    state = { latitude: null, errorMessage: '' }; 
    // Works the same as below (We can show that by using babel)

    // Everytime an instance is created, constructor will be called
    // Not the only method but common in React to initialize Class
    // constructor(props) {
    //     super(props);

    //     //This is the ONLY TIME we asign this.state directly
    //     this.state = { latitude: null, errorMessage: '' };
    // }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return(
                <div>                    
                    Error: {this.state.errorMessage}
                </div>
            );
        } 
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude} />
        } 
        
        return <Spinner message="Please accept the location request"/>
    }

    // In react render must be defined!!
    render() {
        return (
            <div className="border red"></div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)