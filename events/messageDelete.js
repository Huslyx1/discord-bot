// Start of Constants
const Discord = require("discord.js");
const settings = require("../storage/settings.json");
// End of Constants

// Start of Message Delete Event
module.exports = oldMessage => {
  if (oldMessage.content.startsWith(settings.prefix)) {
    const command = oldMessage.content
      .split(" ")[0]
      .slice(settings.prefix.length);
    const { client } = oldMessage;

    if (client.commands.has(command) || client.aliases.has(command)) return;
  }
  
  for (i = 0; i < settings.ignoredChannels.length; i +=1) {
    if (oldMessage.channel.id === settings.ignoredChannels[i]) {
        return;
    }
  }
  oldMessage.guild.fetchAuditLogs({type: 72 /* MESSAGE_DELETE */ }).then(logs => {
      const embed = new Discord.RichEmbed()
      .setAuthor(oldMessage.author.tag, oldMessage.author.displayAvatarURL)
      .setDescription(
        `**Message Sent by ${oldMessage.author} in ${
          oldMessage.channel
        } was deleted by ${logs.entries.first().executor}!**\n\n**Message:**\n${oldMessage.content}\n`,
      )
      .setThumbnail(
        "http://www.free-icons-download.net/images/full-trash-can-icon-27619.png",
      )
      .setColor("RANDOM")
      .setTimestamp();
    oldMessage.guild.channels
      .find("id", settings.moderationLogsChannel)
      .send({ embed });
    });
};
// End of Message Delete Event
