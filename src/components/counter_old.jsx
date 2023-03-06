import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        // tags: ['tag1', 'tag2', 'tag3']
        // tags: []
    };

    // styles = {
    //     fontSize: 10,
    //     fontWeight:"bold"
    // };

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no text</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // handleIncrement = () => {
    //     // console.log("Increment Clicked", this);
    //     this.setState({count: this.state.count + 1})
    // }
    handleIncrement = () => {
        console.log();
        this.setState({count: this.state.count + 1});
    };

    // doHandleIncrement = () =>{
    //     this.handleIncrement({id:1});
    // }
    render() { 
        // let classes = this.getBadgeClasses();
        // let classes = "badge m-2 badge-";
        // classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id:1})} className= 'btn btn-secondary btn-sm'>Increment</button>
    {/* youtube part conditional rendering not needed #********************************************************* */}
                {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn -sm'>Increment</button> */}
    {/* youtube part conditional rendering not needed #********************************************************* */}
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                {/* {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()} */}

                {/* <span>{this.formatCount()}</span> */}
                {/* <button>Increment</button> */}            
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}  = this.state;
        return count === 0 ? "zero" : count;
    }
    
}

export default Counter;