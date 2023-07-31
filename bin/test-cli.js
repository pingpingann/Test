#! /usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");
program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f, --force", "override")
  .action((name, options) => {
    console.log("项目名称", name);
  });
program.parse(process.argv);
