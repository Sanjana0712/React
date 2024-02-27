const heading = React.createElement("h1", {
    id: "he"
}, "Hello World");
console.log(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
