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
code: `**💥 New error was found!**
$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon]
$title[‼️ Error Occurred in $serverName]
$description[>>> 🔎 The error was found in **\`$handleError[command]\`** command!\n\n👾 Suspected encoding errors in **\`$handleError[function]\`** functions\n\n📑 A **\`$handleError[function]\`** malfunction occurred due to :\n$handleError[error]]
$color[ff0000]
$footer[🗃 Error Log ~ serverID #COLON# $guildID]
$addTimestamp`
})

//for console
bot.readyCommand({
  channel: "",
  code: `
$setVar[readytime;$dateStamp] $timezone[asia/jakarta]
$log[
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
╭───────────────────────────────────────────────
│ Active On $userTag[$clientID]
❑───────────────────────────────────────────────
│ Owner: $userTag[$botOwnerID]
❑───────────────────────────────────────────────
│ Ping: $pingms
│ dbPing: $dbpingms
│ Cpu: $cpu%
│ Ram: $truncate[$ram] MB
│ NodeJS: $nodeVersion
│ Package: Aoi.js v$packageVersion
❑───────────────────────────────────────────────
│ Uptime Date: $formatDate[$dateStamp]
│ Clock: $hour:$minute:$second $timezone[asia/jakarta]
❑───────────────────────────────────────────────
│  Created by ©Zanixon Development
╰───────────────────────────────────────────────
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
]
`

})

//uptime msg
bot.readyCommand({
  channel: "1026427080268849194", //set this into your server channel logs
  code: `
$color[1;$getVar[color]]
$title[1;🟢︱Uptime Alerts!]
$description[1;
❑──── **__Server Info__**
> **Node** : $nodeVersion
> **Package** : Aoi.js v$packageVersion
> **CPU Usage** : $cpu%
> **Ram** : $truncate[$ram] MB
> **Ping** : $pingms
> **DbPing** : $dbpingms
❑──── **__Bot Info__**
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
