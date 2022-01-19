const event = async function(client) {
    client.on("messageCreate", async (message) => {
        if (message.author.bot) return;
        message.args = message.content.slice(client.config.prefix.length).split(' ');
        message.command = message.args.shift().toLowerCase();
        const command = client.commands[message.command] || client.commands[client.aliases[message.command]];

        if (message.content.startsWith(client.config.prefix) && command && command.config.enabled) {
            try {
                for (const perm of command.config.permissionsBot) {
                    if (message.channel.permissionsFor(client.user).has(perm, true)) continue;
                    if (command.insufficentBot) return command.insufficentBot(client, message, perm);
                    return;
                }
                for (const perm of command.config.permissionsUser) {
                    if (client.config.developerOverride && message.author.id === client.config.developer || message.channel.permissionsFor(message.member).has(perm, true)) continue;
                    if (command.insufficentUser) return command.insufficentUser(client, message, perm);
                    return;
                }
                if (command.config.developerOnly && message.author.id != client.config.developer) {
                    if (command.insufficentDeveloper) return command.insufficentDeveloper(client, message);
                    return;
                }
                if (command.config.guildOnly && (!message.guild || message.channel.type === "dm")) {
                    if (command.insufficentGuild) return command.insufficentGuild(client, message);
                    return;
                };
                return await command.run(client, message);;
            } catch (e) {
                client.logger.error("bot-event-command", `failed to execute command ${message.command}`)
            }
            return;
        }
    });
};
exports = module.exports = event;