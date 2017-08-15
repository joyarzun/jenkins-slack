const App = require("./index");
const config = {
  route: "/slack",
  port: 8080,
  token: "xoxb-XXXXXXXXX",
  channel: "XXXXXXXXX"
};

const app = App(config);
