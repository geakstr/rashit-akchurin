const fs = require("fs");
const markdownit = require("markdown-it")();

const readFile = path => {
  return fs.readFileSync(path, { encoding: "utf8" });
};

const writeFile = (path, data) => {
  return fs.writeFileSync(path, data, { encoding: "utf8" });
};

const readJsonFile = path => {
  return JSON.parse(readFile(path));
};

// const poems = readJsonFile("./order.json").reduce((html, title) => {
//   const poem = markdownit.render(readFile(`./poems/${title}.md`));
//   return html + "\n" + `<article>${poem}</article>`;
// }, "");

const poems =  markdownit.render(readFile(`./poems.md`));

writeFile(
  "./index.html",
  readFile("./template.html").replace("$$$$$CONTENT$$$$$", poems)
);
