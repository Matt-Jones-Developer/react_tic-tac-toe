import React from "react";

// older class method 
// class Square extends React.Component {
//   constructor(props) {
//     // define structure of super
//     super(props);
//     // store current state 
//     this.state = {
//       value:null,
//     };
//   }

//   render() {
//     return (
//       // using arrow function to only call after a click, not every re-render
//       <button 
//         className="square" 
//         // now passing props fro board to square, use onClick (prop) instead of setState
//         // onClick={() => this.setState({value: 'X'})}
//         onClick={() => this.props.onClick()}
//       >
//         {/* // remember it got clicked= this.state  */}
//         {/* now state is a prop */}
//         {/* {this.state.value} */}
//         {this.props.value}
//       </button>
//     );
//   }
// }

// what is the onClick now doing:
// The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
// When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.
// This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.
// Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls the Board’s handleClick(i) when clicked.

// change to a function component - simpler - render, no 'own state' - take props instead

function Square(props) {
  return (
    // same onClick function but shorter -
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;