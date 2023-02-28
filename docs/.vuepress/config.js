const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "刘頔的个人知识库",
  description: '刘頔的个人知识库',
  base: '/ididididididi.github.io/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "e235a13755dafab6ae92",
        clientSecret: "824a4f145f8b601f47a340fa034eeb6bb429af2a",
        owner: "ld",
        repo: "ididididididi.github.io",
      },
    ],
  ],
  themeConfig,
}