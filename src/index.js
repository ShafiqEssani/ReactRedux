import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import _ from 'lodash';
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';


const API_KEY = 'AIzaSyBZoIhm4qBJJbu9qvTTkGRlPnb-zE27_b4';

//creating new compo and this is going to produce some HTML
class App extends Component {

    constructor() {
        super();

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('hello world')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const vSearch = _.debounce( (term) => {
            this.videoSearch(term)
            // keyword => this.videoSearch(keyword)
        }, 300)

        return (
            <div>
                <SearchBar onSearch={vSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                v={this.state.videos} />
            </div>
        );        
    }

}

//Taking this compo html and put it in the dom

//What and where
ReactDOM.render(<App/>, document.querySelector('.container'))