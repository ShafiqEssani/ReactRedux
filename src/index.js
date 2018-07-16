import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from '../components/search_bar';

const API_KEY = 'AIzaSyBZoIhm4qBJJbu9qvTTkGRlPnb-zE27_b4';

//creating new compo and this is going to produce some HTML
class App extends Component {

    constructor() {
        super();

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'test'}, (videos) => {
            this.setState({ videos });
        })
    }
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );        
    }

}

//Taking this compo html and put it in the dom

//What and where
ReactDOM.render(<App/>, document.querySelector('.container'))