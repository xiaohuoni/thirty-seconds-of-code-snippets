const fs = require("fs");

const snippets_data = require("./snippets_data.json").data;

const snippets = {};

Object.values(snippets_data).map(item => {
  try {
    const data = fs.readFileSync(`./docs/${item.attributes.fileName}`);
    snippets[item.id] = {
      prefix: `tc-${item.id}`,
      body: item.attributes.codeBlocks,
      description: data.toString()
    };
  } catch (error) {
    console.log(item.id);
  }
  return item;
});

fs.writeFile("../snippets/snippets.json", JSON.stringify(snippets));