# Discord-Bot-Template
This template is used in all of my bots, it is lightweight, preformant and simple to use. This has been based on the [Discord.js](https://discord.js.org) NodeJS framework.

## Getting Started
To get started simply enter your configuration into the JSON file location at references/configuration.json

## Creating Commands
To create a command simply clone the commands/template.js rename it to the name of the command (not neccesary but nice for organizational reasons), once that is completed you can modify the configuration found here.
```javascript
command_model({
    name: "template",
    enabled: false,
    aliases: ["level"],
    description: "You can remove this template, it is just for demonstration purposes",
});
```
None of these options are neccesary except for the command name, as they all default to these values.
```json
name = null,
enabled = true,
description = null,
usage = [],
aliases = [],
permissionsUser = [],
permissionsBot = [],
guildOnly = false,
developerOnly = false,
```
You can choose to include any of these within the configuration of the command, apart from the command options you can also set the functions that will run when specific conditions are met. This system is reliable and simple for you to customise.
```javascript
command.run = async function(client, message) {
    // will be run when a command is triggered
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
```

## Adding Events
You can modify existing events and create new ones by following the pattern within events/ready.js, there is a simple function that passes in the client and then within that function you can designate what events you'd like to use as you normally would acccording the the [Discord.js v13 docs](https://discord.js.org).