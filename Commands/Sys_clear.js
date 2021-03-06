const Command = require('../Structures/Command.js');
const config = require('../config.json');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = new Command({
    name: "clear",
    description: "Removes certain amount of messages. Usage: clear <count>",

    async run(message, args, client)
    {
        let amount = parseInt(args[1]) + 1;

        let embed = new Discord.MessageEmbed();
        embed.setColor(config.warningColor);     

        embed.setDescription("You don't have permission to do that!")
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({embeds : [embed]});

        embed.setDescription("Please enter the amount of messages to clear!")
        if (!args[1]) return message.channel.send({embeds : [embed]});

        embed.setDescription("Please type a real number!")
        if (isNaN(args[1])) return message.channel.send({embeds : [embed]});

        embed.setDescription("You can't remove more than 100 messages at once!")
        if (amount > 100) return message.channel.send({embeds : [embed]});

        embed.setDescription("You have to delete at least one message!")
        if (amount < 1) return message.channel.send({embeds : [embed]});

        await message.channel.bulkDelete(amount + 1, true);
    }
});