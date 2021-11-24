const readline = require("readline-sync");
const { Command, flags } = require("@oclif/command");
const CSV = require("../api/csv");

class TransformStringCommand extends Command {
  isOdd(value) {
    return value % 2 === 0;
  }
  async run() {
    const { args, flags } = this.parse(TransformStringCommand);

    const data = readline.question("Enter your your sentence here: ");
    const alternateString = data
      .split("")
      .map((c, index) =>
        this.isOdd(index) ? c.toLowerCase() : c.toUpperCase()
      )
      .join("");
    const toUpperCaseString = data.toUpperCase();

    this.log(toUpperCaseString);
    this.log(alternateString);

    const csv = new CSV();
    csv.create(data);
  }
}

TransformStringCommand.description = `This command create a csv file from string input
`;

TransformStringCommand.flags = {
  option: flags.string({
    char: "o",
    description: "some option here to test flag",
  }),
};

module.exports = TransformStringCommand;
