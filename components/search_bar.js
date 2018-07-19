import React, { Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { keyword: ''};
    }

    render() {
    return (
        <div className="search-bar">
            <input 
                value = {this.state.keyword}    
                onChange = { (ev) => {
                console.log(ev.target.value);
                this.setState({ keyword: ev.target.value})
        }}/>
        </div>
    );
    }

    // onInputChange(ev) {
    //     console.log(ev.target.value)
    // }
}

export default SearchBar;