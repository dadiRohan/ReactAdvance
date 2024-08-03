import React from "react";
import ReactDOM from "react-dom/client";

//React element with Arrays//
const parent = React.createElement(
    "div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"This is H1 Tag"),
                React.createElement("h2",{},"This is H2 Tag")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"This is H1 Tag"),
                React.createElement("h2",{},"This is H2 Tag")
            ]
        )
    ]
)
// --------------------------------------------------------------------------------------------------//

// React element with normal const//
const heading = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
    "Hello React for Application"
);
console.log(heading);
// --------------------------------------------------------------------------------------------------//

// JSX Syntax //
const jsxheading = (<h1 id="heading" className="heading" tabIndex="1">
        This is JSX heading
    </h1>);
console.log(jsxheading);
// --------------------------------------------------------------------------------------------------//

// React Element //
const Sample = (<h1>This is Main Head</h1>);
//React Component //
const Title = () => (
    <h1 id="heading" className="heading" tabIndex="1">
        {Sample} 
        This is JSX Title
    </h1>
);
// React Component Composition //
const Reactcomponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">This is Heading for React Component</h1>
    </div>
);
console.log(Reactcomponent);
// --------------------------------------------------------------------------------------------------//


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(reactcomponent);
