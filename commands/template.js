const command_model = require("../references/command.js");
const command = new command_model({
    name: "template",
    enabled: false,
    aliases: ["level"],
    description: "You can remove this template, it is just for demonstration purposes",
});
command.run = async function(client, message) {
    console.log("running");
};
// insert how to handle, otherwise bot will just ignore command
command.insufficentBot = async function (client, message, name) {
    // can customise what happens when missing permission
};
// insert how to handle, otherwise bot will just ignore command
command.insufficentUser = async function (client, message, name) {
    // can customise what happens when missing permission
};
// insert how to handle, otherwise bot will just ignore command
command.insufficentGuild = async function (client, message) {
    // can customise what happens when guildOnly and command is triggered not in a guild
};
// insert how to handle, otherwise bot will just ignore command
command.insufficentDeveloper = async function (client, message) {
    // can customise what happens when developerOnly and command is triggered but user is not developer
}
exports = module.exports = command;