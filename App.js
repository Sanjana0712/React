// const heading = React.createElement("h",{id:"heading"},"Hello");

const parent = React.createElement("div",{id : "parent"},
React.createElement("div",{id : "child"},
[React.createElement("h1",{id : "heading"}, "Hello World!"), React.createElement("h2",{id : "heading"}, "Hello Sanjana!")]
)
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);