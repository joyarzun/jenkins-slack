module.exports = {
  route: "/slack-notification",
  port: 8080,
  processBody: body => ({
    name: body.name,
    url: body.build.full_url,
    status: body.build.status,
    scm: body.build.scm
  }),
  slackPostMessageUrl: "https://slack.com/api/chat.postMessage",
  textFormat: data =>
    `The job \`${data.name}\` has finished\nStatus: \`${data.status}\``
};
