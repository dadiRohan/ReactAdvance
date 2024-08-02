// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"},
//     "Hello React for Application"
// );
// console.log(heading);

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

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(parent);