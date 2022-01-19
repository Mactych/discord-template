const fs = require("fs");
const discord = require("discord.js");
const core = require(`${__dirname}/references/core.js`);
const client = new core({
    partials: ['MESSAGE', 'REACTION'],
    autoReconnect: true,
    intents: [
        discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        discord.Intents.FLAGS.GUILD_PRESENCES,
        discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.DIRECT_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});
client.externals = {};
client.commands = {};
client.aliases = {};

try {
    client.externals["commands"] = fs.readdirSync(`${__dirname}/commands`).filter(f => f.split(".").pop() === "js");
    client.externals["events"] = fs.readdirSync(`${__dirname}/events`).filter(f => f.split(".").pop() === "js");
    if (client.externals["commands"] <= 0) return client.logger.error("bot-init", "could not find any commands to load");
    if (client.externals["events"] <= 0) return client.logger.error("bot-init", "could not find any events to load");
    for (const e of client.externals["events"]) {
        require(`${__dirname}/events/${e}`)(client);
        client.logger.log("bot-event-loaded", `loaded event - ${e}`);
    }
    for (const c of client.externals["commands"]) {
        const command = require(`${__dirname}/commands/${c}`);
        for (const a of command.help.aliases) client.aliases[a] = command.help.name;
        client.commands[command.help.name] = command;
    }
    client.login(client.config.token).then(() => {
        client.logger.log("bot-login", `logged in as ${client.user.tag}`);
    });
} catch (e) {
    client.logger.error("bot-init", e);;
}