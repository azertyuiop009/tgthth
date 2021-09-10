const {Collection, Client, Discord, MessageEmbed, WebhookClient, Attachment, User} = require('discord.js')
const fs = require('fs')
const child = require("child_process");
const os = require('os');
const { random, forEach } = require('mathjs');
const { GiveawaysManager } = require("discord-giveaways");
var fetch  = require('node-fetch');
const ms = require('ms');
const db = require('quick.db');
const { cpuUsage } = require('process');
const Clipboard = require('clipboard')
const inv = new db.table("Invites")
const moment = require('moment');
const guilds = JSON.parse(fs.readFileSync('guilds.json'));
const recon = require('reconlx')
const DaysAgo = recon.DaysAgo
const timeSpan = ms("14 days");
const invites = {};
var request = require("request");
const bad = ["fuck","stfu","puta","shit","gay","niga","mom","bitch","nigga","fk","foff","nigger" , "niga", "**", "ga y","rat","noob","die","baby","sex","por","pen","vag","hub","peanutnoob","suck","sick","dic"]
var chalk = require('chalk');
var config = JSON.parse(fs.readFileSync('config.json'));
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
	muteThreshold: 4, // Amount of messages sent in a row that will cause a mute
	kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
	muteMessage: '**{user_tag}** has been muted for spamming.',// Message that will be sent in chat upon muting a user.
	banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
	maxDuplicatesWarning: 6, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesMute: 8, // Ammount of duplicate message that trigger a mute.
	ignoredPermissions: ['ADMINISTRATOR'], // Bypass users with any of these permissions.
	ignoreBots: true, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredMembers: [], // Array of User IDs that get ignored.
	muteRoleName: "Muted", // Name of the role that will be given to muted users!
	removeMessages: true // If the bot should remove all the spam messages when taking action on a user!
	// And many more options... See the documentation.
});
const client = new Client({
    disableEveryone: true
})
const wait = require('util').promisify(setTimeout);
const token = 'ODYxNjU0MDE4MTQ1MjU1NDg1.YOM71g.pxiXbCOBbk0DQMJHcIgFBT7MvV4'
client.commands = new Collection();
client.aliases = new Collection();
client.on('ready', async () => {
    client.user.setActivity(`PeaScripting`)
    console.log(`${client.user.username} Loadded :)`)
})
function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(regexp.test(str)) {
      return true;
    } else {
      return false;
    }
    
  }
  function is_url2(str) {
   let reg = message.content
    if(reg.inc) {
      return true;
    } else {
      return false;
    }
    
  }
client.on('message', async message => {
    const prefix = guilds.Guilds[message.guild.id].prefix || '+'
if(guilds.Guilds[message.guild.id].antispam == "on"){
    antiSpam.message(message)
}
if(message.content.toLowerCase() == ('lostprefix')) {
    const embed8895 = new MessageEmbed()
    .setTitle('Info')
    .setColor(`RANDOM`)
    .setURL('https://discord.gg/z95VUSXWDY')
    .setDescription('The Prefix is **"'+ guilds.Guilds[message.guild.id].prefix + '"**')
    .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
    message.channel.send(embed8895)
} 
    const MessageLog = client.channels.cache.find(channel => channel.id === guilds.Guilds[message.guild.id].Logs);
    if(guilds.Guilds[message.guild.id].badword == "on"){
        for (var i=0; i < bad.length; i++) {

        let role = message.guild.roles.cache.find(r => r.name === "Muted");
        let pog = guilds.Guilds[message.guild.id].Autorole
        let role2 = message.guild.roles.cache.find(r => r.id === pog);

        if(!message.member.hasPermission('ADMINISTRATOR') || !message.member.permissions.has('ADMINISTRATOR') || !message.member.permissions.has('MANAGE_MESSAGES')){
            if (message.content.toLowerCase().includes(bad[i])) {
            message.delete();
            const embed8896 = new MessageEmbed()
            .setTitle('Bad Word')
            .setColor(`RANDOM`)
            .setURL('https://discord.gg/z95VUSXWDu')
            .setDescription('You Cannot Say That')
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
            message.reply(embed8896)
            message.member.roles.add(role)
            message.member.roles.remove(role2)
            await wait(10000);
            message.member.roles.remove(role);
            message.member.roles.add(role2);
        }
    }
}
    }
    if(guilds.Guilds[message.guild.id].antilink == "on"){
        let role = message.guild.roles.cache.find(r => r.name === "Muted");
        let pog = guilds.Guilds[message.guild.id].Autorole
        let role2 = message.guild.roles.cache.find(r => r.id === pog);

        if(!message.member.hasPermission('ADMINISTRATOR') || !message.member.permissions.has('ADMINISTRATOR') || !message.member.permissions.has('MANAGE_MESSAGES')){
            if(message.content.toLowerCase().includes('https://') || message.content.toLowerCase().includes('discord.gg')){
                message.delete();
                const embed8895 = new MessageEmbed()
                .setTitle('Link')
                .setColor('#9423E1')
                .setURL('https://discord.gg/z95VUSXWDY')
                .setDescription('You Cannot Send Link here :/')
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                 message.reply(embed8895)                                                                                                                                     
                 message.member.roles.add(role)
                 message.member.roles.remove(role2)
                 await wait(5000);
                 message.member.roles.remove(role);
                 message.member.roles.add(role2);
            }
        if(is_url(message.content) === true) {
            message.delete()
            const embed8894 = new MessageEmbed()
            .setTitle('Link')
            .setColor('#9423E1')
            .setURL('https://discord.gg/z95VUSXWDY')
            .setDescription('You Cannot Send Link here ://')
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
            return message.reply(embed8894)
          }
        }
    }
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
        if (!cmd)
            return message.reply("Please specify a command to execute!");
        if(cmd === 'mute'){
              if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("[Error]You Dont Have The Perm To Mute Someone", {code: "js"})
              let role = message.guild.roles.cache.find(role => role.name === "Muted")
              let pog = guilds.Guilds[message.guild.id].Autorole
              let role2 = message.guild.roles.cache.find(r => r.id === pog);
              let member = message.mentions.members.first()
                console.log(member)
                let reason = message.content.split(" ").slice(2).join(" ")
                if(member.hasPermission('ADMINISTRATOR')) return message.channel.send('[Error]You Cannot Mute An Administrator!',{code: "js"})
                if(!reason) reason = "No Reason Specified!"
                if(!role) return message.channel.send("[Error]You Dont Have Role Named Muted In This Server",{code: "js"})
                if(!member) return message.channel.send("Please Mention a member!")
                if(member.roles.cache.has(role.id)) return message.channel.send("[Error]That User Is Already Muted!", {code: "js"})
                member.roles.add(role)
                member.roles.remove(role2)
                .then(() => {
                message.channel.send(`[Info]Sucessfully muted ${member} whit reason: ${reason}`, {code: "js"})
                })
                .catch(() =>{
                    message.channel.send("[Error]Oops, Something went Wrong!", {code:"js"})
                })
            }else if(cmd === "rmute"){
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("[Error]You Dont Have The Perm", {code: "js"})
            if(!message.mentions.roles.first()) return message.channel.send(`[Error]Please Specify A Role`,{code: "js"})
            var role = message.guild.roles.cache.get(message.mentions.roles.first().id);
            role.edit({
                permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','CREATE_INSTANT_INVITE']
              })
              console.log(`Muted ${role}`)
              message.channel.send(`Updated ${role.name} Permission`)
            }else if(cmd === "gend" || cmd === "giveawayend"){
                if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
                    return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
                }
            
                // If no message ID or giveaway name is specified
                if(!args[0]){
                    return message.channel.send(':x: You have to specify a valid message ID!');
                }
            
                let giveaway = 
                client.GiveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
                client.GiveawaysManager.giveaways.find((g) => g.messageID === args[0]);
            
                if(!giveaway){
                    return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') + '`.');
                }
            
                // Edit the giveaway
                client.GiveawaysManager.edit(giveaway.messageID, {
                    setEndTimestamp: Date.now()
                })
                // Success message
                .then(() => {
                    // Success message
                    message.channel.send('Giveaway will end in less than '+(client.GiveawaysManager.options.updateCountdownEvery/5000)+' seconds...');
                })
                .catch((e) => {
                    if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
                        message.channel.send('This giveaway is already ended!');
                    } else {    
                        console.error(e);
                        message.channel.send('An error occured...');
                    }
                });
            }else if(cmd === "greroll"){
                if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
                    return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
                }
                
                // If no message ID or giveaway name is specified
                if(!args[0]){
                    return message.channel.send(':x: You have to specify a valid message ID!');
                }
                
                // try to found the giveaway with prize then with ID
                let giveaway = 
                // Search with giveaway prize
                client.GiveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
                // Search with giveaway ID
                client.GiveawaysManager.giveaways.find((g) => g.messageID === args[0]);
                
                // If no giveaway was found
                if(!giveaway){
                    return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                }
                
                // Reroll the giveaway
                client.GiveawaysManager.reroll(giveaway.messageID)
                .then(() => {
                    // Success message
                    message.channel.send('Giveaway rerolled!');
                })
                .catch((e) => {
                    if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
                        message.channel.send('This giveaway is not ended!');
                    } else {
                        console.error(e);
                        message.channel.send('An error occured...');
                    }
                });
            }else if(cmd === "gstart" || cmd === "giveaway" || cmd === "g"){
                if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
                    return message.channel.send('[Error] You need to have the manage messages permissions to start giveaways.',{code: "js"});
                }
            
                // Giveaway channel
                let giveawayChannel = message.mentions.channels.first();
                // If no channel is mentionned
                if(!giveawayChannel){
                    return message.channel.send('[Error]Please Mention a valid channel!',{code: "js"});
                }
            
                // Giveaway duration
                let giveawayDuration = args[1];
                // If the duration isn't valid
                if(!giveawayDuration || isNaN(ms(giveawayDuration))){
                    return message.channel.send('[Error]Please Specify a valid duration!',{code: "js"});
                }
            
                // Number of winners
                let giveawayNumberWinners = 1;
                // If the specified number of winners is not a number
                if(!giveawayNumberWinners || !giveawayNumberWinners >= 1){
                    return message.channel.send('[Error]Please Specify a valid number of winners!',{code: "js"});
                }
            
                // Giveaway prize
                let giveawayPrize = args[2]
                // If no prize is specified
                if(!giveawayPrize){
                    return message.channel.send('[Error]Please Specify a valid prize!',{code: "js"});
                }
            
                // Start the giveaway
                client.GiveawaysManager.start(giveawayChannel, {
                    // The giveaway duration
                    time: ms(giveawayDuration),
                    // The giveaway prize
                    prize: giveawayPrize,
                    // The giveaway winner count
                    winnerCount: giveawayNumberWinners,
                    // Who hosts this giveaway
                    hostedBy: message.author,
                    // Messages
                    messages: {
                        giveaway: " ",
                        giveawayEnded: " ",
                        timeRemaining: "{duration}",
                        inviteToParticipate: "React with 🎉 to participate!",
                        winMessage: "Congratulations, {winners}! You Won **{prize}**!",
                        embedFooter: "Giveaways",
                        noWinner: "Giveaway cancelled, no valid participations.",
                        hostedBy: "Hosted by: {user}",
                        winners: "winner(s)",
                        endedAt: "Ended at",
                        units: {
                            seconds: "seconds",
                            minutes: "minutes",
                            hours: "hours",
                            days: "days",
                            pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                        }
                    }
                });
            
                message.channel.send(`Giveaway started in ${giveawayChannel}!`);
            }else if(cmd === 'unmute'){
                if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("[Error]You Dont Have The Perm To Unmute Someone", {code: "js"})
                let pog = guilds.Guilds[message.guild.id].Autorole
                let role2 = message.guild.roles.cache.find(r => r.id === pog);
                let role = message.guild.roles.cache.find(role => role.name === "Muted")
                      let member = message.mentions.members.first()
                      let reason = message.content.split(" ").slice(2).join(" ")
                      if(!reason) reason = "No Reason Specified!"
                      if(!role) return message.channel.send("[Error]You Dont Have Role Named Muted In This Server",{code: "js"})
                      if(!member) return message.channel.send("Please Mention a member!")
                      if(!member.roles.cache.has(role.id)) return message.channel.send("[Error]That User Is Not Muted!", {code: "js"})
                      member.roles.remove(role)
                      member.roles.add(role2)
                      .then(() => {
                      message.channel.send(`[Info]Sucessfully unmuted ${member} whit reason: ${reason}`, {code: "js"})
                      })
                      .catch((err) =>{
                          message.channel.send("[Error]Oops, Something went Wrong!", {code:"js"})
                          console.log(err)
                          console.log(pog)
                      })
                }else if(cmd === 'info'){
            const { guild } = message
            const { name, region, memberCount, owner, afkTimeout } = guild
            const embed8 = new MessageEmbed()
            .setThumbnail(guild.iconURL())
            .setTitle('Server Info For '+name)
            .setColor(`RANDOM`)
            .addFields(
                {
                    name: 'Owner',
                    value: `<@${guild.ownerID}>`,
                    inline: true
                },
                {
                    name: 'Servers',
                    value: `${client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: 'Channels',
                    value: `${guild.channels.cache.size}`,
                    inline: true
                },
                {
                    name: 'Member',
                    value: `${memberCount}`,
                    inline: true
                },
                {
                    name: 'Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Commands',
                    value: `20`,
                    inline: true
                }
            )
              .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
            message.channel.send(embed8)
		    }else if(cmd === 'check'){
            if(!args[0]) return message.channel.send(`[Error]Specify A Token To Check`,{code: "js"})
            const tokenerr = args[0]
            fs.writeFileSync('./tokens.txt', tokenerr);
            const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/gi, '').split("\n");
            fs.writeFileSync('./output/nitro.txt', '');
            fs.writeFileSync('./output/invalid.txt', '');
            fs.writeFileSync('./output/verified.txt', '');
            fs.writeFileSync('./output/unverified.txt', '');
var verifiedArr = [];
var unverifiedArr = [];
var invalidArr = [];
var nitroArr = [];
var acc;

var i = 0;
    if(i >= tokens.length) 
    {
        fs.writeFileSync('./output/unverified.txt', unverifiedArr.toString().split(",").join(""));
        fs.writeFileSync('./output/invalid.txt', invalidArr.toString().split(",").join(""));
        fs.writeFileSync('./username.txt', verifiedArr.toString().split(",").join(""));
        fs.writeFileSync('./output/nitro.txt', nitroArr.toString().split(",").join(""));
        }
    check(tokens[i]);
    console.clear();
    console.log("[" + chalk.yellow("Nitro: ") + nitroArr.length +"] " + "[" + chalk.blue("Verified: 1") +"] [" + chalk.red("Invalid: ") + invalidArr.length +"] [" + chalk.gray("Unverified: ") + unverifiedArr.length +"] ");
    i++;

function check(token)
{
    request({
        method: "GET",
        url: "https://discordapp.com/api/v7/users/@me",
        headers: 
        {
            authorization: token
        }
    }, (error, response, body) => {
        if(!body) return;
        var json = JSON.parse(body);
        acc = json;
        if(!json.id)  
        {
            invalidArr.push(token + "\n");
        }
        else if(!json.verified) 
        {
            unverifiedArr.push(token + "\n");
        }
        else
        {
            if(config.usernames) verifiedArr.push(json.username + "#" + json.discriminator + "\n");
            else verifiedArr.push(token + "\n");
        }
if(!json.id){
const usernamee = "Invalid Token"
const { guild } = message
const { name, region, memberCount, owner, afkTimeout } = guild
const embed8 = new MessageEmbed()

.setThumbnail(guild.iconURL())
.setTitle('Token Info (Invalid)')
.setColor('#ff0000')
.setURL('https://discord.gg/z95VefqfSXWDY')
.addFields(
{
    name: 'Token : ',
    value: `${tokens}`,
    inline: true
},
{
    name: 'Username : ',
    value: `${usernamee}`,
    inline: true
}
)
.setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());

console.log(usernamee)

message.channel.send(embed8)
}
else {
const usernamee = json.username + "#" + json.discriminator + "\n"
const { guild } = message
const { name, region, memberCount, owner, afkTimeout } = guild
const embed8 = new MessageEmbed()

.setThumbnail(guild.iconURL())
.setTitle('Token Info (Valid)')
.setURL('https://discord.gg/z95VefqfSXWDY')
.setColor(`RANDOM`)
.addFields(
{
    name: 'Token : ',
    value: `${tokens}`,
    inline: true
},
{
    name: 'Username : ',
    value: `${usernamee}`,
    inline: true
}
)
.setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
console.log(usernamee)
message.channel.send(embed8)
}
    })
}
        }else if(cmd === 'lock'){
            if(message.member.id == "861312143177809921"){
            const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
            if (args[0] === 'on') {
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: false
                        
                    }).then(() => {
                        channel.setName(channel.name += `🔒`)
                        const embed3 = new MessageEmbed()
                        .setTitle('Logs')
                        .setColor(`RANDOM`)
                        .setURL('https://discord.gg/z95VUSXWDY')
                        .addField(message.author.tag+' Locked All Channel')
                        .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                        MessageLog.send(embed3);
                    })
                })
                return message.channel.send('locked all channels');
            } else if (args[0] === 'off') {
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: true
                    }).then(() => {
                            channel.setName(channel.name.replace('🔒', ''))
                            const embed4 = new MessageEmbed()
                            .setTitle('Logs')
                            .setColor(`RANDOM`)
                            .setURL('https://discord.gg/z95VUSXWDY')
                            .addField(message.author.tag+' Unlocked All Channel')
                            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                            MessageLog.send(embed4);
                        }
                    )
                })
                return message.channel.send('unlocked all channels')
            }
        }else{
            message.reply('[Error]Only Notux Dev Can Use This command', {code:"js"})
        }
        }else if(cmd === 'key' || cmd === 'get-key'){
            const embed84 = new MessageEmbed()
            .setTitle(`Get Key`)
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .setThumbnail("https://media.giphy.com/media/mFMksHvN6zpGVdt4QZ/giphy.gif")
            .addField('Check Your Dm',`${message.author}`)
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
            .setColor(`RANDOM`);
            const embed98 = new MessageEmbed()
            .setTitle(`Get Key`)
            .setURL('https://mboost.me/a/2YY')
            .setThumbnail("https://u.cubeupload.com/Baconplayer009/keyicon26599.png")
            .addField('You Can Get Your Key At :', "https://mboost.me/a/2YY")
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
            .setColor(`RANDOM`);
        message.author.send(embed98)
        message.channel.send(embed84)
        }else if(cmd === "set-log" || cmd === "log" || cmd === "setlog"){
            try {
              if (!message.member.hasPermission("MANAGE_CHANNELS")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
            
              if (!message.mentions.channels.first()) return await message.channel.send('[Error]Please Specify a channel.',{code: "js"}); 
            
              guilds.Guilds[message.guild.id].Logs = message.mentions.channels.first().id;
              fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
              await message.channel.send(`Successfully Setted The Logs Channel to ${guilds.Guilds[message.guild.id].Logs}`,{code: "js"});
            } catch(err) {
              console.error(err);
            }
        }else if(cmd === "set-welcome" || cmd === "welcome" || cmd === "setwelcome"){
            try {
              if (!message.member.hasPermission("MANAGE_CHANNELS")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
            
              if (!message.mentions.channels.first()) return await message.channel.send('[Error]Please Specify a channel.',{code: "js"}); 
            
              guilds.Guilds[message.guild.id].Welcome = message.mentions.channels.first().id;
              fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
              await message.channel.send(`Successfully Setted The Welcome Channel to ${guilds.Guilds[message.guild.id].Welcome}`,{code: "js"});
            } catch(err) {
              console.error(err);
            }
        }else if(cmd === "set-autorole" || cmd === "autorole" || cmd === "autor"){
            if (!message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
            if (!message.mentions.roles.first()) return await message.channel.send('[Error]Please Specify a role.',{code: "js"}); 
            
            guilds.Guilds[message.guild.id].Autorole = message.mentions.roles.first().id;
            fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
            message.channel.send(`Setted AutoRole To ${message.mentions.roles.first().name}`,{code: "js"});

        }else if(cmd === "setprefix"){
            if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`[Error]You Dont Have The Permissions`,{code: "js"})
            if(!args[0]) return message.channel.send(`[Error]Please Specify A Prefix`,{code: "js"})

            guilds.Guilds[message.guild.id].prefix = args.join(" ");
            fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
            message.channel.send(`Setted Prefix To ${args.join(" ")}`,{code: "js"});
        }else if(cmd === "set-antibad" || cmd === "badw" || cmd === "badword"){
            if (!message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
            if(!args[0]) return message.channel.send("[Error]Please Specify on or off",{code: "js"})
            guilds.Guilds[message.guild.id].badword = args[0]
            fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
            const embed = new MessageEmbed()
            .setTitle('BadWord')
            .setColor(`RANDOM`)
            .setURL(`https://discord.gg/sHz8ZKWZe`)
            .addField(`BadWord is now`, `**${args[0]}**`)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter('Request By '+message.author.tag,message.author.displayAvatarURL())
            message.channel.send(embed)
        }else if(cmd === "set-antilink" || cmd === "antilink" || cmd === "activelink"){
        if (!message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
        if(!args[0]) return message.channel.send("[Error]Please Specify on or off",{code: "js"})
        guilds.Guilds[message.guild.id].antilink = args[0]
        fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
        const embed = new MessageEmbed()
        .setTitle('Antilink')
        .setColor(`RANDOM`)
        .setURL(`https://discord.gg/sHz8ZKWZA`)
        .addField(`Antilink is now`, `**${args[0]}**`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Request By '+message.author.tag,message.author.displayAvatarURL())
        message.channel.send(embed)
    }else if(cmd === "set-antispam" || cmd === "antispam" || cmd === "activespam"){
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
        if(!args[0]) return message.channel.send("[Error]Please Specify on or off",{code: "js"})
        guilds.Guilds[message.guild.id].antispam = args[0]
        fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
        const embed = new MessageEmbed()
        .setTitle('AntiSpam')
        .setColor(`RANDOM`)
        .setURL(`https://discord.gg/sHz8ZKWZA`)
        .addField(`AntiSpam is now`, `**${args[0]}**`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Request By '+message.author.tag,message.author.displayAvatarURL())
        message.channel.send(embed)
        }else if(cmd === "set-leave" || cmd === "leave" || cmd === "setleave"){
            try {
              if (!message.member.hasPermission("MANAGE_CHANNELS")) return await message.channel.send('[Error]You Dont Have The Permission',{code: "js"});
              if (!message.mentions.channels.first()) return await message.channel.send('[Error]Please Specify a channel.',{code: "js"}); 
            
              guilds.Guilds[message.guild.id].Leave = message.mentions.channels.first().id;
              fs.writeFileSync('./guilds.json', JSON.stringify(guilds));
              await message.channel.send(`Successfully Setted The Leave Channel to ${guilds.Guilds[message.guild.id].Leave}`,{code: "js"});
            } catch(err) {
              console.error(err);
            }
        }else if(cmd === 'lb' || cmd === 'lbinv' || cmd === 'leaderboard'){
            let first = 0;
            let premier = "";
            let second = 0;
            let deuxieme = "";
            let third = 0;
            let troisieme = "";
            let four = 0;
            let quatrieme = "";
            let five = 0;
            let cinquieme = "";
            let six = 0;
            let sixieme = "";
            let seven = 0;
            let septieme = "";
            let eight = 0;
            let huitieme = "";
            let nine = 0;
            let neuvieme = "";
            let ten = 0;
            let dixieme = "";
            let first1 = 0;
            let second1 = 0;
            let third1 = 0;
            let four1 = 0;
            let five1 = 0;
            let six1 = 0;
            let seven1 = 0;
            let eight1 = 0;
            let nine1 = 0;
            let ten1 = 0;
            let first2 = 0;
            let second2 = 0;
            let third2 = 0;
            let four2 = 0;
            let five2 = 0;
            let six2 = 0;
            let seven2 = 0;
            let eight2 = 0;
            let nine2 = 0;
            let ten2 = 0;
            let first3 = 0;
let second3 = 0;
let third3 = 0;
let four3 = 0;
let five3 = 0;
let six3 = 0;
let seven3 = 0;
let eight3 = 0;
let nine3 = 0;
let ten3 = 0;
let first4 = 0;
let second4 = 0;
let third4 = 0;
let four4 = 0;
let five4 = 0;
let six4 = 0;
let seven4 = 0;
let eight4 = 0;
let nine4 = 0;
let ten4 = 0;
    
            message.guild.members.cache.forEach(member => {
                console.log(member.displayName)
                let realinv = inv.fetch(`realinv_${message.guild.id}_${member.id}`)
                let leftinv = inv.fetch(`leftinv_${message.guild.id}_${member.id}`)
                let bonusinv = inv.fetch(`bonusinv_${message.guild.id}_${member.id}`)
                let totinv = inv.fetch(`totinv_${message.guild.id}_${member.id}`)
                let fakeinv = inv.fetch(`fakeinv_${message.guild.id}_${member.id}`)
                inv.set(`totinv_${message.guild.id}_${member.id}`,realinv - leftinv + bonusinv)
                
                if (totinv === null) inv.set(`totinv_${message.guild.id}_${member.id}`, 0);
                if (realinv === null) inv.set(`realinv_${message.guild.id}_${member.id}`, 0);
                if (fakeinv === null) inv.set(`fakeinv_${message.guild.id}_${member.id}`, 0);
                if (bonusinv === null) inv.set(`bonusinv_${message.guild.id}_${member.id}`, 0);
                if (leftinv === null) inv.set(`leftinv_${message.guild.id}_${member.id}`, 0);

                totinv = inv.get(`totinv_${message.guild.id}_${member.id}`);
                realinv = inv.get(`realinv_${message.guild.id}_${member.id}`);
                leftinv = inv.get(`leftinv_${message.guild.id}_${member.id}`);
                fakeinv = inv.get(`fakeinv_${message.guild.id}_${member.id}`);
                bonusinv = inv.get(`bonusinv_${message.guild.id}_${member.id}`);


    
                if (totinv >= first) {
                    first = totinv;
                    premier = member.displayName;
                    first1 = realinv
                    first2 = leftinv
                    first3 = fakeinv
                    first4 = bonusinv
                }
    
                if (totinv <= first && totinv > second && premier != member.displayName) {
                    second = totinv;
                    deuxieme = member.displayName;
                    second1 = realinv
                    second2 = leftinv
                    second3 = fakeinv
                    second4 = bonusinv
                }
    
                if (totinv <= second && totinv > third && first != member.displayName && deuxieme != member.displayName) {
                    third = totinv;
                    troisieme = member.displayName;
                    third1 = realinv
                    third2 = leftinv
                    third3 = fakeinv
                    third4 = bonusinv
                }
                if (totinv <= third && totinv > four && first != member.displayName && troisieme != member.displayName) {
                    four = totinv;
                    quatrieme = member.displayName;
                    four1 = realinv
four2 = leftinv
four3 = fakeinv
four4 = bonusinv
                }
                if (totinv <= four && totinv > five && first != member.displayName && quatrieme != member.displayName) {
                    five = totinv;
                    cinquieme = member.displayName;
                    five1 = realinv
five2 = leftinv
five3 = fakeinv
five4 = bonusinv
                }
                if (totinv <= five && totinv > six && first != member.displayName && cinquieme != member.displayName) {
                    six = totinv;
                    sixieme = member.displayName;
                    six1 = realinv
six2 = leftinv
six3 = fakeinv
six4 = bonusinv
                }
                if (totinv <= six && totinv > seven && first != member.displayName && sixieme != member.displayName) {
                    seven = totinv;
                    septieme = member.displayName;
                    seven1 = realinv
seven2 = leftinv
seven3 = fakeinv
seven4 = bonusinv
                }
                if (totinv <= seven && totinv > eight && first != member.displayName && septieme != member.displayName) {
                    eight = totinv;
                    huitieme = member.displayName;
                    eight1 = realinv
eight2 = leftinv
eight3 = fakeinv
eight4 = bonusinv
                }
                if (totinv <= eight && totinv > nine && first != member.displayName && huitieme != member.displayName) {
                    nine = totinv;
                    neuvieme = member.displayName;
                    nine1 = realinv
nine2 = leftinv
nine3 = fakeinv
nine4 = bonusinv
                }
                if (totinv <= nine && totinv > ten && first != member.displayName && neuvieme != member.displayName) {
                    ten = totinv;
                    dixieme = member.displayName;
                    ten1 = realinv
ten2 = leftinv
ten3 = fakeinv
ten4 = bonusinv
                }
            });

            const embed98 = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Leaderboard`)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`**🆗 = Current Invites**\n**✅ = Real Invites**\n **❌ = Leave Invites**\n **💩 = Fake Invites**\n **✨ = Bonus Invites**\n\n\n**1**| **${premier}** => 🆗: **${first}**     (✅: **${first1}** ❌: **${first2}** 💩: **${first3}** ✨: **${first4}**)\n **2**| **${deuxieme}** => 🆗: **${second}**     (✅: **${second1}** ❌: **${second2}** 💩: **${second3}** ✨: **${second4}**)\n**3**| **${troisieme}** => 🆗: **${third}**     (✅: **${third1}** ❌: **${third2}** 💩: **${third3}** ✨: **${third4}**)\n**4**| **${quatrieme}** => 🆗: **${four}**     (✅: **${four1}** ❌: **${four2}** 💩: **${four3}** ✨: **${four4}**)\n**5**| **${cinquieme}** => 🆗: **${five}**     (✅: **${five1}** ❌: **${five2}** 💩: **${five3}** ✨: **${five4}**)\n**6**| **${sixieme}** => 🆗: **${six}**     (✅: **${six1}** ❌: **${six2}** 💩: **${six3}** ✨: **${six4}**)\n**7**| **${septieme}** => 🆗: **${seven}**     (✅: **${seven1}** ❌: **${seven2}** 💩: **${seven3}** ✨: **${seven4}**)\n**8**| **${huitieme}** => 🆗: **${eight}**     (✅: **${eight1}** ❌: **${eight2}** 💩: **${eight3}** ✨: **${eight4}**)\n**9**| **${neuvieme}** => 🆗: **${nine}**     (✅: **${nine1}** ❌: **${nine2}** 💩: **${nine3}** ✨: **${nine4}**)\n**10**| **${dixieme}** => 🆗: **${ten}**     (✅: **${ten1}** ❌: **${ten2}** 💩: **${ten3}** ✨: **${ten4}**)`)
            .setTimestamp()
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
            message.channel.send({ embed: embed98 })

        }else if(cmd === 'clear' || cmd === 'purge'){
            const member = message.mentions.members.first();
            const messages = message.channel.messages.fetch();
            if (!message.member.permissions.has("MANAGE_MESSAGES"))return message.channel.send(`[Error]You do not have correct permissions to do this action`,{code: "js"});
            if (member) {
                const userMessages = (await messages).filter((m) => m.author.id === member.id);
                message.channel.bulkDelete(userMessages);
                const embed15 = new MessageEmbed()
                .setTitle(`${message.author.username}`)
                .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                .setDescription(`Successfully Deleted ${member} Messages`)
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
                .setColor(`RANDOM`);
                message.channel.send(embed15)
            }  else {
        if (!args[0]) {return message.channel.send(`Please enter a amount 1 to 100`)}
        message.delete()
        let deleteAmount;
        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

         message.channel.bulkDelete(deleteAmount, true);
        const embeda = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .setDescription(`Successfully Deleted ${deleteAmount}/100 Max Message`)
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
            .setColor(`RANDOM`);
         message.channel.send(embeda).then(m => m.delete({ timeout: 1000}))
        const embed5122 = new MessageEmbed()
        .setTitle(`Logs`)
        .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
        .setDescription(`${message.author.tag} Deleted ${deleteAmount}/100 Max Message in ${message.channel.name}`)
        .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
        .setColor(`RANDOM`);
        MessageLog.send(embed5122)
}
        }else if(cmd === 'say'){
            if(message.member.permissions.has("ADMINISTRATOR")){

            const aut = message.author;
              message.delete()
            const embed3 = new MessageEmbed()
            .setColor(`RANDOM`)
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .setTitle("Message:")
            .setDescription(args.join(" "))
          .setFooter('Request By '+ aut.tag, aut.displayAvatarURL());
            message.channel.send(embed3)
        }else{
            message.reply('[Error]You Cannot Use This Command', {code:"js"})
        }
        }else if(cmd === 'avatar' || cmd === 'av'){
      let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!mentionedMember) mentionedMember = message.member;
      const aut = message.author;

      const embed2 = new MessageEmbed()
      .setColor(`RANDOM`)
      .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
      .setTitle(mentionedMember.user.tag + "'s Avatar")
      .setImage(mentionedMember.user.displayAvatarURL())
	.setFooter('Request By '+ aut.tag, aut.displayAvatarURL());
   message.channel.send(embed2)
        }else if(cmd === 'console.log' || cmd === 'console' || cmd === 'cl'){
              let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
              if (!mentionedMember) mentionedMember = message.member;
            const embed1 = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle('Console')
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .setDescription('Console logged '+ args.join(" "))
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
            message.reply(embed1)
          console.log(args.join(" "))
        }else if(cmd === 'copy'){
            navigator.clipboard.writeText("Hello, World!");
        }else if(cmd === 'ban'){
            if (!message.member.hasPermission('BAN_MEMBERS')) {
                return message.channel.send(`[Error]You Dont Have The Permission for ban someone`,{code: "js" })
            }
            if (!args[0]) {
                return message.channel.send(`Please mention a user!`)
            }
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(member.hasPermission("BAN_MEMBERS")) return message.channel.send("[Error]You Cannot Ban Admin Dumb",{code: "js"})
            const reason = args[1] ? args.slice(1).join(' ') : 'No Reason Specified!';
           const embed8 = new MessageEmbed()
            .setTitle(` You Got Banned In ${message.guild.name}`)
            .setColor(`RANDOM`)
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .addField('Banned For: ', reason)
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
            .setThumbnail('https://c.tenor.com/Y5FIRkOAIe8AAAAd/shaktii-nuclear-missile-at-the-indian-armys-pokhran-test-range-in-rajasthan-gif.gif');
            try {
                member.send(embed8)
                const embed3 = new MessageEmbed()
                .setTitle('Logs')
                .setColor(`RANDOM`)
                .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                .addField(message.author.tag+' Banned ', member)
                .addField('Reason: ', reason)
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
                .setThumbnail('https://c.tenor.com/Y5FIRkOAIe8AAAAd/shaktii-nuclear-missile-at-the-indian-armys-pokhran-test-range-in-rajasthan-gif.gif');
                MessageLog.send(embed3)
                await member.ban();
                await message.channel.send(`[Info]${member} Has been banned!`, {code: "js"})
            } catch (e) {
                return message.channel.send(`User is not in the server!`)
            }
        }else if(cmd === 'unban'){
            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 5000 }));

            if (!args[0]) return message.channel.send('please enter a users id to unban!').then(m => m.delete({ timeout: 5000 }));
    
            let member;
    
            try {
                member = await client.users.fetch(args[0])
            } catch (e) {
                console.log(e)
                return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
            }
    
            const reason = args[1] ? args.slice(1).join(' ') : 'no reason';
    
            const embede = new MessageEmbed()
                .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));
    
            message.guild.fetchBans().then( bans => {
    
                const user = bans.find(ban => ban.user.id === member.id );
    
                if (user) {
                    const embede = new MessageEmbed()
                    .setTitle(`Log`)
                    .setColor(`RANDOM`)
                    .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                    .addField('User ID', user.user.id, true)
                    .addField('user Tag', user.user.tag, true)
                    .addField('Ban Reason', user.reason != null ? user.reason : 'no reason')
                    .addField('Unban Reason', reason)
                    .setThumbnail('https://c.tenor.com/Y5FIRkOAIe8AAAAd/shaktii-nuclear-missile-at-the-indian-armys-pokhran-test-range-in-rajasthan-gif.gif');
                    message.guild.members.unban(user.user.id, reason).then(() => message.channel.send("Unbanned "+user.user.tag))
                    MessageLog.send(embede);
                } else {
                    embede.setTitle(`User ${member.tag} isn't banned!`)
                        .setColor(`RANDOM`)
                    message.channel.send(embede)
                }
    
            }).catch(e => {
                console.log(e)
                message.channel.send('An error has occurred!')
            });
        }else if(cmd === 'whopro'){
            message.delete()
            message.reply(`**OMG** ${message.guild.owner} PROOOO`)
            message.reply(`**OMG** ${message.guild.owner} PROOOO`)
            message.reply(`**OMG** ${message.guild.owner} PROOOO`)
            message.reply(`**OMG** ${message.guild.owner} PROOOO`)
            message.reply(`**OMG** ${message.guild.owner} PROOOO`)
        }else if(cmd === 'whonoob'){
            let member = message.mentions.members.first()
            message.delete()
            message.reply(`**OMG** ${member} NOOOOB`)
            message.reply(`**OMG** ${member} NOOOOB`)
            message.reply(`**OMG** ${member} NOOOOB`)
            message.reply(`**OMG** ${member} NOOOOB`)
            message.reply(`**OMG** ${member} NOOOOB`)
        }else if(cmd === 'kickme'){
                    const embed89 = new MessageEmbed()
                    .setTitle('Bye Bye Peanut')
                    .setColor(`RANDOM`)
                    .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                    .addField(message.author.tag ," Got Kicked")
                    .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                    message.member.send(embed89)
                    await message.channel.send(embed89)
        }else if(cmd === 'kick'){
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            const reason = args[1] ? args.slice(1).join(' ') : 'No Reason Specified!';
            const embed99 = new MessageEmbed()
            .setTitle(` You Got Kicked In ${message.guild.name}`)
            .setColor(`RANDOM`)
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .addField('Kicked For: ', reason)
            .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL())
            .setThumbnail('https://c.tenor.com/Y5FIRkOAIe8AAAAd/shaktii-nuclear-missile-at-the-indian-armys-pokhran-test-range-in-rajasthan-gif.gif');
            if(args[0] == "me"){
                if (message.member.hasPermission('KICK_MEMBERS')) {
                    return message.channel.send(`[Error]You Cannot Kick Yourself`,{code: "js"})
                }else{
                    const embed89 = new MessageEmbed()
                    .setTitle('EZ')
                    .setColor(`RANDOM`)
                    .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                    .addField(message.author.tag ," Got Kicked")
                    .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                    message.member.send(embed99)
                    await message.channel.send(embed89)
                    await message.member.kick();
                }
            }
            if (!message.member.hasPermission('KICK_MEMBERS')) {
                return message.channel.send(`[Error]You Dont Have The Permission`,{code: "js"})
            }
            if (!args[0]) {
                return message.channel.send(`[Error]Please Mention a user!`,{code: "js"})
            }
            if(member.hasPermission('ADMINISTRATOR')) return message.channel.send(`[Error]You Cannot Kick An Administrator`,{code: "js"})

            try {
                const embed8 = new MessageEmbed()
                .setTitle('EZ')
                .setColor(`RANDOM`)
                .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                .addField(member.id ," Got Kicked")
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                member.send(embed99)
                console.log("Sended :)")
                message.channel.send(embed8)
                member.kick();
                const embed3 = new MessageEmbed()
                .setTitle('Logs')
                .setColor(`RANDOM`)
                .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                .addField(message.author.tag+' Kicked '+ member.tag)
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                MessageLog.send(embed3);
            } catch (e) {
                return message.channel.send(`User isn't in this server!`)
            }
      }else if(cmd === 'nuke'){
        if (!message.member.hasPermission('ADMINISTRATOR')) {
          return message.channel.send('[Error]You Dont Have The Permission',{code: "js"})
          
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('[Nuker]Nuked This Channel',{code: "js"})
        })
        message.channel.delete()
      }else if(cmd === 'slowmode' || cmd === 'sm'){
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));
            const embed889 = new MessageEmbed()
            .setTitle('Slowmode Disabled')
            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .addField('Slowmode: ', args[0])
            .addField('Reason: ', reason)
                .setColor(`RANDOM`)
                .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(embed889)
                const embed3 = new MessageEmbed()
                .setTitle('Logs')
                .setColor(`RANDOM`)
                .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                .addField(message.author.tag+' Deleted Slowmode on #'+ message.channel.name)
                .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
                MessageLog.send(embed3);
            return message.channel.setRateLimitPerUser(0, reason)
        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

        embed.setTitle('Slowmode Enabled')
        .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
            .addField('Slowmode: ', args[0])
            .addField('Reason: ', reason)
            .setColor(`RANDOM`);
         
        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));
        const embed3 = new MessageEmbed()
        .setTitle('Logs')
        .setColor(`RANDOM`)
        .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
        .addField(message.author.tag+' Putted Slowmode on #'+ message.channel.name + " For " + args[0])
        .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
        MessageLog.send(embed3);
    }else if(cmd === "inv" || cmd === "invite" || cmd === "invites"){
        
        let user = message.mentions.members.first() || message.author
        let realinv = inv.fetch(`realinv_${message.guild.id}_${user.id}`)
        let fakeinv = inv.fetch(`fakeinv_${message.guild.id}_${user.id}`)
        let leftinv = inv.fetch(`leftinv_${message.guild.id}_${user.id}`)
        let totinv = inv.fetch(`totinv_${message.guild.id}_${user.id}`)
        let bonusinv = inv.fetch(`bonusinv_${message.guild.id}_${user.id}`)
        if(realinv === null) realinv = 0
        if(realinv < 0) inv.set(`realinv_${message.guild.id}_${user.id}`, 0)
        if(bonusinv < 0) inv.set(`bonusinv_${message.guild.id}_${user.id}`, 0)
        if(totinv < 0) inv.set(`totinv_${message.guild.id}_${user.id}`, 0)
        if(fakeinv < 0) inv.set(`fakeinv_${message.guild.id}_${user.id}`, 0)
        if(leftinv < 0) inv.set(`leftinv_${message.guild.id}_${user.id}`, 0)
        if(totinv === null) totinv = 0
        if(fakeinv === null) fakeinv = 0
        if(leftinv === null) leftinv = 0 
        if(bonusinv === null) bonusinv = 0
        inv.set(`totinv_${message.guild.id}_${user.id}`,realinv - leftinv + bonusinv)
        if(user == message.author){
            const embedinv1 = new MessageEmbed()
            .setTitle(user.tag)
            .setColor(`RANDOM`)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`**✅ ${realinv}** Regular(s) \n❌ **${leftinv}** Leave(s) \n💩 **${fakeinv}** Fake(s) \n✨ **${bonusinv}** Bonus\n\n ${user.tag} has currently **${realinv - leftinv + bonusinv}** invites.`)
            .setFooter('PeaScript Tracker', client.user.displayAvatarURL());
            message.channel.send(embedinv1)
        }else{
            const embedinv = new MessageEmbed()
            .setTitle(message.mentions.users.first().tag)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(`RANDOM`)
            .setDescription(`**✅ ${realinv}** Regular(s) \n❌ **${leftinv}** Leave(s) \n💩 **${fakeinv}** Fake(s) \n✨ **${bonusinv}** Bonus\n\n **${message.mentions.users.first().tag}** has currently **${realinv - leftinv + bonusinv}** invites.`)
            .setFooter('PeaScript Tracker', client.user.displayAvatarURL());
    
            message.channel.send(embedinv)
        }
    }else if(cmd === 'addinv'){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("you dont have the perm nerd")

        let user = message.mentions.members.first() || message.author

        if(isNaN(args[1])) return message.channel.send("Please Specify A number Not A letter")
        if(args[1] > 100) return message.channel.send("[Error]You Cannot Add More Then 100 Invites",{code: "js"})
        inv.add(`bonusinv_${message.guild.id}_${user.id}`, args[1]);

        return message.channel.send(`You Gived ${args[1]}`)
    }else if(cmd === 'resetleftinv'){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("[Error]You Dont Have The Perm To Do That",{code: "js"})

        let user = message.mentions.members.first()
        inv.set(`leftinv_${message.guild.id}_${user.id}`, 0);

        return message.channel.send(`${message.mentions.members.first()} Invites Have Been Reseted!`)
    }else if(cmd === 'resetrealinv'){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("[Error]You Dont Have The Perm To Do That",{code: "js"})

        let user = message.mentions.members.first()
        inv.set(`realinv_${message.guild.id}_${user.id}`, 0);

        return message.channel.send(`${message.mentions.members.first()} Invites Have Been Reseted!`)
    }else if(cmd === 'resetbonusinv'){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("[Error]You Dont Have The Perm To Do That",{code: "js"})

        let user = message.mentions.members.first()
        inv.set(`bonusinv_${message.guild.id}_${user.id}`, 0);

        return message.channel.send(`[Sucess] ${message.mentions.members.first()} Invites Have Been Reseted!`,{code: "js"})
    }else if(cmd === 'removeinv'){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("[Error]You Dont Have The Perm To Do That",{code: "js"})
        if(!args[0])return message.channel.send(`[Error]Please Specify What Type real,fake,left or bonus`,{code: "js"})
        if(!args[1])return message.channel.send(`[Error]Please Specify Someone`,{code: "js"})
        if(!args[2])return message.channel.send(`[Error]Please Specify How Much Invite To Remove`,{code: "js"})

        let user = message.mentions.members.first()
        if(args[0] == "real"){
            if(isNaN(args[2])) return message.channel.send("Please Specify A Number")
            inv.add(`realinv_${message.guild.id}_${user.id}`, -args[2]);
            return message.channel.send(`[Sucess]You Removed ${args[2]} Regular Invite Of ${message.mentions.users.first().tag}`,{code: "js"})
        }else if(args[0] == "fake"){
            if(isNaN(args[2])) return message.channel.send("Please Specify A Number")
            inv.add(`fakeinv_${message.guild.id}_${user.id}`, -args[2]);
            return message.channel.send(`[Sucess]You Removed ${args[2]} Fake Invite Of ${message.mentions.users.first().tag}`,{code: "js"})
        }else if(args[0] == "bonus"){
            if(isNaN(args[2])) return message.channel.send("Please Specify A Number")
            inv.add(`bonusinv_${message.guild.id}_${user.id}`, -args[2]);
            return message.channel.send(`[Sucess]You Removed ${args[2]} Bonus Invite Of ${message.mentions.users.first().tag}`,{code: "js"})
        }else if(args[0] == "left"){
            if(isNaN(args[2])) return message.channel.send("Please Specify A Number")
            inv.add(`leftinv_${message.guild.id}_${user.id}`, -args[2]);
            return message.channel.send(`[Sucess]You Removed ${args[2]} Left Invite Of ${message.mentions.users.first().tag}`,{code: "js"})
        }
    }else if(cmd === 'setactivity'){
        if(message.member.hasPermission('ADMINISTRATOR')){
            client.user.setActivity(`${args.join(" ")}`)
            message.channel.send(`[Info]Setted Activity To ${args.join(" ")}`,{code:"js"})
        }else{
            message.reply('[Error]You Cannot Use This Command', {code:"js"})
        }
}else{
return message.reply(`[Error]Please Put An Working Command`, {code:"js"})
}
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
});
const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    // This function is called when the manager needs to get all the giveaway stored in the database.
    async getAllGiveaways(){
        // Get all the giveaway in the database
        return db.get("giveaways");
    }

    // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
    async saveGiveaway(messageID, giveawayData){
        // Add the new one
        db.push("giveaways", giveawayData);
        // Don't forget to return something!
        return true;
    }

    async editGiveaway(messageID, giveawayData){
        // Gets all the current giveaways
        const giveaways = db.get("giveaways");
        // Remove the old giveaway from the current giveaways ID
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the new giveaway to the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

    // This function is called when a giveaway needs to be deleted from the database.
    async deleteGiveaway(messageID){
        // Remove the giveaway from the array
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

};
if(!db.get("giveaways")) db.set("giveaways", []);
// Create a new instance of your new class
const manager = new GiveawayManagerWithOwnDatabase(client, {
storage: false,
updateCountdownEvery: 5000,
default: {
    clientsCanWin: false,
    exemptPermissions: [ "MANAGE_MESSAGES" ],
    embedColor: `RANDOM`,
    reaction: "🎉"
}
});
client.GiveawaysManager = manager;
// We now have a client.giveawaysManager property to manage our giveaways!

client.GiveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.GiveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});
client.on("guildMemberAdd", async (memb) => {
    let pog = guilds.Guilds[memb.guild.id].Autorole
    let role2 = memb.guild.roles.cache.find(r => r.id === pog);
    memb.roles.add(role2)
    console.log("Added Role "+role2)
    const createdAt = new Date(memb.user.createdAt).getTime();
    const difference = Date.now() - createdAt;
    let invitera = inv.fetch(`inviter_${memb.guild.id}_${memb.user.id}`)
    memb.guild.fetchInvites().then(ginv =>  {
        const invitess = invites[memb.guild.id];
        invites[memb.guild.id] = ginv;
        const invite = ginv.find(inv => invitess.get(inv.code).uses < inv.uses);
        const inviter = invite.inviter
        let realinv = inv.fetch(`realinv_${memb.guild.id}_${inviter.id}`)
        let leftinv = inv.fetch(`leftinv_${memb.guild.id}_${inviter.id}`)
        let bonusinv = inv.fetch(`bonusinv_${memb.guild.id}_${inviter.id}`)
        const welcome = client.channels.cache.find(channel => channel.id === guilds.Guilds[memb.guild.id].Welcome);
        let totinv = inv.fetch(`totinv_${memb.guild.id}_${inviter.id}`)
        inv.set(`totinv_${memb.guild.id}_${inviter.id}`,realinv - leftinv + bonusinv)
        console.log(invite.code)
        console.log(inviter.id)
        if(invitera == inviter.id){
            console.log("You Already Got Invited By "+ inviter.id)
            inv.set(`wasinv_${memb.guild.id}_${memb.id}`, "wasinvby")
            inv.set(`code_${memb.guild.id}_${memb.id}`, invite.code)
             welcome.send(`╭・${memb} just joined ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Invited by ${inviter}.\n・They Currently Have ${realinv - leftinv + bonusinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
        }else{
            console.log(inviter.id)
            if(difference < timeSpan) {
                inv.add(`fakeinv_${memb.guild.id}_${inviter.id}`, 1);
                inv.set(`inviter_${memb.guild.id}_${memb.user.id}`,inviter.id)
                inv.set(`code_${memb.guild.id}_${memb.id}`, invite.code)
                console.log("Alt Detected")
                console.log(`setted inviter to ${inviter.id}`)
                 welcome.send(`╭・${memb} just joined ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Invited by ${inviter}.\n・They Currently Have ${realinv - leftinv + bonusinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
            }else{
                inv.add(`realinv_${memb.guild.id}_${inviter.id}`, 1);
                inv.set(`inviter_${memb.guild.id}_${memb.user.id}`,inviter.id)
                inv.set(`code_${memb.guild.id}_${memb.id}`, invite.code)
                console.log(`setted inviter to ${inviter.id}`)
                 welcome.send(`╭・${memb} just joined ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Invited by ${inviter}.\n・They Currently Have ${realinv - leftinv + bonusinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
            }
        }
    })
});
client.on("guildMemberRemove", async (memb) => {
    const createdAt = new Date(memb.user.createdAt).getTime();
    const difference = Date.now() - createdAt;
    memb.guild.fetchInvites().then(ginv => {
        let code = inv.fetch(`code_${memb.guild.id}_${memb.id}`)
        const invitess = invites[memb.guild.id];
        invites[memb.guild.id] = ginv;
        const invite = ginv.find(inv => invitess.get(code).uses < inv.uses);
        const inviter = invite.inviter
        let invitera = inv.fetch(`inviter_${memb.guild.id}_${memb.user.id}`)
        let wasinv = inv.fetch(`wasinv_${memb.guild.id}_${memb.id}`)
        let realinv = inv.fetch(`realinv_${memb.guild.id}_${invitera}`)
        let totinv = inv.fetch(`totinv_${memb.guild.id}_${invitera}`)
        inv.set(`totinv_${memb.guild.id}_${invitera}`,realinv - leftinv + bonusinv)
        console.log(invitera)
        let leftinv = inv.fetch(`leftinv_${memb.guild.id}_${invitera}`)
        let bonusinv = inv.fetch(`bonusinv_${memb.guild.id}_${invitera}`)
        const bye = client.channels.cache.find(channel => channel.id === guilds.Guilds[memb.guild.id].Leave);
        if(invitera !== inviter.id){
            if(difference > timeSpan) {
                inv.add(`leftinv_${memb.guild.id}_${invitera}`, 1);
                console.log(`Added 1 Leave Invite of ${invitera.tag}`)
                setTimeout(function() {
                bye.send(`╭・${memb} just leaved ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Was Invited by <@${invitera}>.\n・They have now ${totinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
                }, 1000);
              }else{
                bye.send(`╭・${memb} just leaved ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Was Invited by <@${invitera}>.\n・They have now ${totinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
              }
        }else{
            console.log("He Was Already Joined So We Dont give a left invite gg peanut smart")
            bye.send(`╭・${memb} just leaved ${memb.guild.name}!\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n・Account created ${DaysAgo(memb.user.createdAt)}.\n・Was Invited by <@${invitera}>.\n・They have now ${totinv} invites.\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n╰・${memb.guild.name} now has ${memb.guild.memberCount} members!\n`)
        }
    })
});
client.on("guildCreate", (guild) => { // This event triggers when the bot joins a guild. 
    let rawdata = fs.readFileSync('guilds.json');
    let guilds = JSON.parse(rawdata);
    console.log(`Joined new guild: ${guild.name}`);
    var chx = guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
    guilds.Guilds [chx.guild.id] = {
        Logs: "",
        Welcome: "",
        Leave: "",
        Autorole: "",
        prefix: "",
        antilink: "off",
        antispam: "off",
        badword: "off",
        members: "",
    }
    
    fs.writeFile("./guilds.json", JSON.stringify (guilds, null, 2), err => {
        if (err) throw err;
        console.log('Server successfully add')
    })
});
client.on("guildDelete", guild => {
})
client.on('messageUpdate', (oldMessage, newMessage) => { // Old message may be undefined
    if (!oldMessage.author) return;
    if(newMessage.content.includes('penis') || newMessage.content.includes('shut') || newMessage.content.includes('stfu') || newMessage.content.includes('bitch') || newMessage.content.includes('suck') || newMessage.content.includes('sick') || newMessage.content.includes('fuck') || newMessage.content.includes('fk') || newMessage.content.includes('mom') || newMessage.content.includes('porn') || newMessage.content.includes('gay') || newMessage.content.includes('shit') || newMessage.content.includes('dick') || newMessage.content.includes('virus')){
        message.delete();
        const embed8895 = new MessageEmbed()
        .setTitle('Bad Word')
        .setColor(`RANDOM`)
        .setURL('https://discord.gg/z95VUSXWDY')
        .setDescription('You Cannot Say That')
        .setFooter('Request By '+ message.author.tag, message.author.displayAvatarURL());
        return message.reply(embed8895)
    }
    if(newMessage.content.includes('discord.gg') || newMessage.content.includes('https://')){
        newMessage.delete()
        const embed = new MessageEmbed()
        .setTitle('Link')
        .setColor(`RANDOM`)
        .setURL('https://discord.gg/vSC6Fsngmj')
        .setDescription('You Cannot Send Link here :/')
        .setFooter('Request By '+ oldMessage.author.tag, oldMessage.author.displayAvatarURL());
       return oldMessage.channel.send(embed)
    }
    const MessageLog = client.channels.cache.find(channel => channel.id === guilds.Guilds[oldMessage.guild.id].Logs);

 })
client.login(token);