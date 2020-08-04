import React from 'react';

class SearchBar extends React.Component{
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        {/* Event Handler without () for onInputChange */}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState( {term: e.target.value })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

/* Alternate Event Handler

//    onInputChange(event) {
        event.target.value
    }

    Uncontrolled Elements
//  Event Handler without () for onInputChange 
    <input type="text" value="this.state.term" onChange={this.onInputChange}/>
                    
//    <input type="text" onChange={(event) => console.log(event.target.value)}/>                        
*/
