module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md",
    }],
    ["@semantic-release/git", {
      "assets": ["docs/CHANGELOG.md"],
    }],
  ]
};
