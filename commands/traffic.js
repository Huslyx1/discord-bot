const { RichEmbed } = require('discord.js');
const axios = require('axios');

// Start of "Traffic" Command
exports.run = (client, message) => {
	if(message.channel.id !== settings.commandsChannel){
		const botRoom = message.guild.channels.find("id", settings.commandsChannel);
		return message.channel.send(`Whoops, it looks like you're not in the ${botRoom} channel`);
	}
	if(args.length < 1 || args.length > 2){
		return message.author.send(["ERROR: Not enough arguments", "Usage: `!traffic <server> eu1 | eu2 | eu3 | eu4 | eu5 | us1 | sa1 | hk1`"]);
	}
	switch(args[0]){
		case "eu1":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu1/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/17190834_1859159134357048_8713377179654090336_n.png?oh=d4f82e7e77c2d2c8f40a084f60fbbbfa&oe=5B31856E');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		case "eu2":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu2/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/17190834_1859159134357048_8713377179654090336_n.png?oh=d4f82e7e77c2d2c8f40a084f60fbbbfa&oe=5B31856E');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		case "eu3":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu3/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/17190834_1859159134357048_8713377179654090336_n.png?oh=d4f82e7e77c2d2c8f40a084f60fbbbfa&oe=5B31856E');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		default:
			message.channel.send(`${message.author}, you've incorrectly used this command, please try again!`);
	};
};
// End of "Traffic" Command

// Start of Permission Level Setting, etc.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
// End of Permission Level Setting, etc.

// Start of Misc.
exports.help = {
  name: "8ball",
  description: "Get a fortune read towards your question!",
  usage: "8ball <question>",
};
// End of Misc.