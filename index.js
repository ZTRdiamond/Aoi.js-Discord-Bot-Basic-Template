const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  sharding: true,
  shardAmount: 20,
  suppressAllErrors: true,
  events: {functionError: true},
  token: "Token", //your bot token!!!
  prefix: ['$getServerVar[prefix]'], 
  intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS"]
})


//handler
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

bot.variables(require('./handler/variable/main-var.js'))
bot.variables(require('./handler/variable/economy.js'))
bot.variables(require('./handler/variable/moderation.js'))

bot.status(require('./handler/status/status_1.js')) 
bot.status(require('./handler/status/status_2.js'))
bot.status(require('./handler/status/status_3.js'))

//event
bot.onMessage();
bot.onInteractionCreate();
bot.onUserUpdate();
bot.onMessageUpdate();
bot.onJoin();
bot.onLeave();

//error log 
bot.functionErrorCommand({
channel: "1026427337983676436", //set this into your server channel logs
code: `**š„ New error was found!**
$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon]
$title[ā¼ļø Error Occurred in $serverName]
$description[>>> š The error was found in **\`$handleError[command]\`** command!\n\nš¾ Suspected encoding errors in **\`$handleError[function]\`** functions\n\nš A **\`$handleError[function]\`** malfunction occurred due to :\n$handleError[error]]
$color[ff0000]
$footer[š Error Log ~ serverID #COLON# $guildID]
$addTimestamp`
})

//for console
bot.readyCommand({
  channel: "",
  code: `
$setVar[readytime;$dateStamp] $timezone[asia/jakarta]
$log[
š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹
ā­āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā Active On $userTag[$clientID]
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā Owner: $userTag[$botOwnerID]
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā Ping: $pingms
ā dbPing: $dbpingms
ā Cpu: $cpu%
ā Ram: $truncate[$ram] MB
ā NodeJS: $nodeVersion
ā Package: Aoi.js v$packageVersion
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā Uptime Date: $formatDate[$dateStamp]
ā Clock: $hour:$minute:$second $timezone[asia/jakarta]
āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
ā  Created by Ā©Zanixon Development
ā°āāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāāā
š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹š¹
]
`

})

//uptime msg
bot.readyCommand({
  channel: "1026427080268849194", //set this into your server channel logs
  code: `
$color[1;$getVar[color]]
$title[1;š¢ļø±Uptime Alerts!]
$description[1;
āāāāā **__Server Info__**
> **Node** : $nodeVersion
> **Package** : Aoi.js v$packageVersion
> **CPU Usage** : $cpu%
> **Ram** : $truncate[$ram] MB
> **Ping** : $pingms
> **DbPing** : $dbpingms
āāāāā **__Bot Info__**
> **Server** : $numberSeparator[$serverCount;,]
> **User** : $numberSeparator[$allMembersCount;,]
*Bot Has Success Running Now!!!*
<t:$truncate[$divide[$readyTimestamp;1000]]:R>
]
$footer[1;Uptime | $formatDate[$dateStamp] | $hour:$minute:$second $timezone[asia/jakarta]]
$addButton[1;Reboot;4;reboot;no]
$addButton[1;Reload;3;reload;no]
`

})
