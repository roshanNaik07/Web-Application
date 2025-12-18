import React from "react"
import ReactDOM from "react-dom/client"

const container1 = React.createElement("div", { id: "outerDiv" },
    React.createElement("div",{id : "innerDiv"},
        React.createElement("h1",{},"Headline inside innerDiv")
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container1)