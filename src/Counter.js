// import React from "react";

// function Counter(){
//     const [state, setState] = React.useState({
//         count:22,
//         name: "karthik",
//     });

//     const increment = () => setState({ ...state, count: state.count + 1});
//     const decrement = () => setState({ ...state, count: state.count - 1});
//     const reset = () => setState({ ...state, count: 0 });

//     return (
//         <>
//          <p>Count: {state.count}</p>
//          <button onClick={increment}>increment</button>
//          <button onClick={decrement}>decrement</button>
//          <button onClick={reset}>reset</button>
//          <p>name: {state.name}</p>
//          <button onClick={() => setState({ ...state, name: "white"})}>change</button>
//         </>
//     )
// }

// export default Counter;

import React from "react";
 

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
        };
    }

    increment = () => this.setState({ count: this.state.count + 1});
    decrement = () => this.setState({  count: this.state.count - 1});
    reset = () => this.setState({ count: 0 });

    render() {
        return(
        <>
         <p>Count: {this.state.count}</p>
         <button onClick={this.increment}>Increment</button>
         <button onClick={this.decrement}>Decrement</button>
         <button onClick={this.reset}>Reset</button>
         {/* <p>name: {state.name}</p>
         <button onClick={() => setState({ ...state, name: "white"})}>change</button> */}
        </>
     
        );
    }
}

export default Counter;