const markdownit = require("markdown-it")();
const fs = require("fs");

const template = fs.readFileSync("./template.html", { encoding: "utf8" });
const md = fs.readFileSync("./poems/v-nenastie.md", { encoding: "utf8" });
const html = markdownit.render(md);
const index = template.replace("$$$$$CONTENT$$$$$", html);
fs.writeFileSync("./index.html", index, { encoding: "utf8" });
