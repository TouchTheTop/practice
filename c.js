// commander 示例
const { program } = require("commander");
program.version("0.0.1");

program
  .command("clone <source> [destination]")
  .option("-d,--depths <level>", "git clone depths")
  .description("clone something.")
  .action((source, destination, cmdObj) => {
    console.log(
      `start1 cloning from ${source} to ${destination} width depth ${cmdObj.depths}`
    );
  });

program.parse(process.argv);
