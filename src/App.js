import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, {Component} from 'react';
import {homePage} from "./utils/constants";
import {SwContext} from "./utils/swContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activePage: homePage}

    }

    changeActivePage = page =>
    {
        this.setState({activePage: page})
    }

    render() {
        return (
            <SwContext.Provider value={
                {
                    activePage: this.state.activePage,
                    changeActivePage: this.changeActivePage
                }
            }>
                <div className='container-fluid'>
                    <Header/>
                    <Main page={this.state.activePage}/>
                    <Footer/>
                </div>
            </SwContext.Provider>
        );
    }
}



export default App;
