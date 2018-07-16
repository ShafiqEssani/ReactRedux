import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBZoIhm4qBJJbu9qvTTkGRlPnb-zE27_b4';

//creating new compo and this is going to produce some HTML
const App = () => {
    return <div> HI!</div>
}


//Taking this compo html and put it in the dom

//What and where
ReactDOM.render(<App/>, document.querySelector('.container'))