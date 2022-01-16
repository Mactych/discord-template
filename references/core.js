const discord = require("discord.js");
const main = discord.Client;
main.prototype.config = require(`${__dirname}/configuration.json`);
main.prototype.functions = require(`${__dirname}/functions.js`);
main.prototype.logger = require(`${__dirname}/logger.js`);
exports = module.exports = main;