const event = async function(client) {
    client.on("ready", () => {
        client.logger.log("bot-event-ready", "bot is ready for commands");
    });
};
exports = module.exports = event;