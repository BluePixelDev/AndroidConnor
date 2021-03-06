const Command = require('../Structures/Command.js');
const Jimp = require('jimp');

module.exports = new Command({
    name: "point",
    description: "An image command",

    async run(message, args, client)
    {
        let font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE) 

        let avatar = await Jimp.read(message.author.displayAvatarURL({ format: 'png' })) 
        let phoenix = await Jimp.read('Images/Resources/PhoenixPointing.jpg');
    
        let msgContent = message.content.slice(args[0].length + 1);
        let text = msgContent != ""? msgContent : "Admit it! I caught you lying!";

        phoenix.composite(avatar, 315 - avatar.getWidth()/2, 90 - avatar.getHeight()/2)
        
        phoenix.print(font, 0,  phoenix.getHeight() - 100, {
            text: text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER
        }, phoenix.getWidth(), phoenix.getHeight() / 2) 

        .write("./Images/Cache.jpg"); // save  
         
          
        message.channel.send({files: ["./Images/Cache.jpg"]})
    }
});