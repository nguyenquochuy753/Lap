import * as React from "react";

// class MyButton extends React.Component {
//     render() {
//         return <button>{this.props.children}</button>
//     }
// }

// exercise 1.3
const MyButton1 = ({ disabled, text }) => (
    <button disabled={disabled}>{text}</button>
);

MyButton1.defaultProps = {
    text: "My Button",
    disabled: false,
};
export default MyButton1;