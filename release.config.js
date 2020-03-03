module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-slack-bot",
      {
        "notifyOnSuccess": true,
        "notifyOnFail": true
      }
    ]
  ]
};
