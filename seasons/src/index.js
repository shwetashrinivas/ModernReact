import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    /*
    constructor(props) {
        super(props);

        //this is the ONLY Time we do direct assignment to this.state
        this.state = { lat: null , errMsg: '' };  
    }  
    */ 
    
    state = { lat: null , errMsg: '' };

    componentDidMount(){
       // console.log("My component was rendered to the screen ");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errMsg: err.message })
        );
    }

    /*componentDidUpdate(){
        console.log("My component just updated and re-rendered!");
    }*/

    renderContent() {
        //conditional rendering
        if (this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>    
        }
        
        if( !this.state.errMsg && this.state.lat){
            //return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }

        // React Component has to define render()

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));