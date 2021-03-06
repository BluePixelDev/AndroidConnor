const Command = require('../Structures/Command.js');
const Jimp = require('jimp');

module.exports = new Command({
    name: "boi",
    description: "An image command",

    async run(message, args, client)
    {
        let avatar = await Jimp.read(message.author.displayAvatarURL({ format: 'png' })) 
        let phoenix = await Jimp.read('Images/Resources/BOI.jpg');

        phoenix.composite(avatar, 320 - avatar.getWidth()/2, 115 - avatar.getHeight()/2) 
        phoenix.composite(avatar, 440 - avatar.getWidth()/2, 710 - avatar.getHeight()/2) 
        .write("./Images/Cache.jpg"); // save  
         
          
        message.channel.send({files: ["./Images/Cache.jpg"]})
    }
});