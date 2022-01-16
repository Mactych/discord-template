const Command = function ({
    name = null,
    enabled = true,
    description = null,
    usage = new Array(),
    aliases = new Array(),
    permissionsUser = new Array(),
    permissionsBot = new Array(),
    guildOnly = false,
    developerOnly = false,
}) {
    this.config = { enabled, permissionsBot, permissionsUser, guildOnly, developerOnly};
    this.help = {name, description, usage, aliases};
}
exports = module.exports = Command;