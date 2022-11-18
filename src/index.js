import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// import "animate.css/animate.css";
// const express = require("express");
// const App = express();

// App.Set("port", process.env.PORT || 3000);
// App.Listen(app.get("port"), () => {
//   console.log(`server en el puerto ${app.get("port")}`);
// });

ReactDOM.render(<App />, document.getElementById("app"));
