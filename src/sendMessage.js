const axios = require("axios");
const qs = require("qs");

const sendMessage = data => config =>
  axios.post(
    config.slackPostMessageUrl,
    qs.stringify({
      token: config.token,
      channel: config.channel,
      text: config.textFormat(data)
    })
  );

module.exports = sendMessage;
