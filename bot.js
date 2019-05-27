const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on("ready", () => {
    console.log("Ready");
    bot.user.setActivity('legit anything but fortnite', { type: 'Playing' });
})


bot.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const welcome = new Discord.RichEmbed()
      .setTitle("Welcome to our server!")
      .setColor([255, 92, 92])
      .setFooter(`${moment().format('lll')}`)
      .setThumbnail(member.user.avatarURL)
  
      bot.channels.filter(x => x.id == 522183451806400534)[0].sendEmbed(welcome);
});


module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}







bot.login('process.env.BOT_TOKEN');
