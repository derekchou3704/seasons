import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    // Everytime an instance is created, constructor will be called
    // Not the only method but common in React to initialize Class
    constructor(props) {
        super(props);

        //This is the ONLY TIME we asign this.state directly
        this.state = { latitude: null, errorMessage: '' };
    }

    // state = { latitude: null, errorMessage: '' }; //Works the same as above

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate() {
    //     console.log('My component did rerendered!')
    // }

    // In react render must be defined!!
    render() {
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
        
        return(
            <div>
                Loading...
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)