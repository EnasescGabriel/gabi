﻿const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);  
});

//PING
client.on('message', msg => {
  if (msg.content === 'n!ping') {
    msg.channel.send(':ping_pong:PONG!');
  }
});

//STREAMERMODE
client.on('ready', () => {
  client.user.setGame('Prefix n!')
})


//Bot join message
client.on("guildCreate", guild => {
  console.log(`Joined in: ${guild.name} , Owner: ${guild.owner.user.tag}`);
});

//ANNOUNCE
client.on('message', message => {
  let args = message.content.split(" ").slice(1);

  if(message.content.startsWith("n!announce"))  {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("✰ | No Permissions!");
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//AVATAR
client.on('message', message => {
  if (message.content === 'n!avatar') {
         message.channel.send(message.author.avatarURL);	 
 
     }
 
});

//SAY
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("n!say"))  {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("✰ | No Permissions!");	  
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//POOL
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("n!pool"))  {
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)		 		 
    message.channel.sendEmbed(embed);
		 message.react("👍")
		 message.react("👎")	
 
     }
 
});

//HELP
client.on('message', message => {
if (message.content === 's!help') {
    let embed = new Discord.RichEmbed()
    .setTitle("▬▬▬▬▬▬》:wave:General Commands:wave: 《▬▬▬▬▬▬")	
    .setColor("#43ff00")
    .addField("✰ | n!help",  "✰ | Arata Comenzile!")
    .addField("✰ | n!ping",  "✰ | Arata pingul tau!")
    .addField("✰ | n!say",  "✰ | Poti sa faci botul sa vorbeasca!")
    .addField("✰ | n!serverinfo",  "✰ | Arata informatiile serverului!")
    .addField("✰ | n!avatar",  "✰ | Arata avatarul tau!")
    .addField("✰ | n!userinfo",  "✰ | Arata informatiile tale!")
    .addField("✰ | n!perm",  "✰ | Iti arata permisiunile!")
    .addField("✰ | n!roles",  "✰ | Arata gradele de pe server!")	
    .addField("✰ | n!invite",  "✰ | Arata cate persoane ai invitat!")	
    .addField("✰ | n!announce",  "✰ | Anunturi!")
    .addField("✰ | n!streamermod",  "✰ | Jocuri!")
    .addField("✰ | n!pool",  "✰ | ")	
    .addField("✰ | n!massdm",  "✰ | Trimite mesaj privat!")
    message.channel.send(embed)
  }
});

//PERM
client.on('message', message => {
if (message.content === 'n!perm') {
  message.channel.send('✰ | *\*Your permissions are:\*\*`\`\`http\n' + JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)+'\n`\`\`')
}
});

//ROLES
client.on('message', message => {
if (message.content === 'n!roles') {
const embed = new Discord.RichEmbed()
embed.addField('✰ | Roles:', '``' + message.guild.roles.map(r => r.name).join('\n') + '``')
embed.setColor('16d9f5')
message.channel.send({embed})
}
});

//USERINFO
client.on('message', message => {
  if (message.content === 'n!userinfo') {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#e8b937")
    .setDescription("This is the user's information's!")
    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID", message.author.id)
    .addField("Created At ", message.author.createdAt)
    .addField("User Avatar", message.author.avatarURL)
    message.channel.send(embed);
 
     }
 
});

//SERVERINFO
client.on('message', message => {
if (message.content === 'n!serverinfo') {
    Promise.all([
        message.react(':sunglasses:'),
        message.react(':money_mouth:'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Name Server:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Verification Level:", message.guild.verificationLevel)
        .addField("Server Owner:", message.guild.owner)	
        .addField("Created On:", message.guild.createdAt)
        .addField("Members:", message.guild.memberCount)
        .addField("Channels:", message.guild.channels.size)
        .addField("Region:", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

//MASSDM
client.on('message', message => {
if(message.content.startsWith('v.massdm')) {
    if (message.author.id === "470521299123437568" || message.author.id === "470521299123437568"){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ")
        const argsresult = args.join(" ")
        let reason = args.join(" ")
                  if(!args[1]) {
 }
 if(args[1]) {
message.channel.guild.members.forEach(member => {{
member.send(reason)
message.delete()
}})}}}
})

client.login('NTIxNjk4Nzc4Njk3MzAyMDQ2.DvANcg.xbhTzExCC-gC0bvFmY28h_bFjZg');