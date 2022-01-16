const command_model = require("../references/command.js");
const command = new command_model({
    name: "rank",
    aliases: ["level"],
    description: "Get the ranking of your current level",
});
command.run = async function(client, message) {
    console.log("sending message");
    message.channel.send({
        content: "Hello World!",
    })
};
exports = module.exports = command;