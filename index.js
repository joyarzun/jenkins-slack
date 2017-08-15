const express = require("express");
const app = express();
const defaultConfig = require("./src/defaultConfig");
const sendMessage = require("./src/sendMessage");

app.use(require("body-parser").json());

const getConfig = userConfig => Object.assign({}, defaultConfig, userConfig);

module.exports = userConfig => {
  const config = getConfig(userConfig);
  const processBody = config.processBody;

  app.post(config.route, function(req, res) {
    const data = processBody(req.body);
    sendMessage(data)(config).then(() => res.sendStatus(200));
  });

  app.listen(config.port, () => console.log("Ready"));

  return app;
};
