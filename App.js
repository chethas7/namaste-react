const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im an h1 child"),
    React.createElement("h2", {}, "im an h1 child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im an h1 child"),
    React.createElement("h2", {}, "im an h1 child"),
  ]),
]);

const Heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
