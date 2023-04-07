const aoijs = require("aoi.js")
const bot = new aoijs.Aoijs({
  token: "Token", //your bot token!!!
  prefix: ['$getGuildVar[prefix]'], 
  intents: ["Guilds", "GuildMessages","GuildMembers"],
  event: ["onMessage","MessageContent","onJoin","onLeave","onInteractionCreate"]
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

//error log 
bot.functionErrorCommand({
channel: "channelID", //set this into your server channel logs
code: `**💥 New error was found!**
$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon]
$title[‼️ Error Occurred in $guildName]
$description[>>> 🔎 The error was found in **\`$handleError[command]\`** command!\n\n👾 Suspected encoding errors in **\`$handleError[function]\`** functions\n\n📑 A **\`$handleError[function]\`** malfunction occurred due to :\n$handleError[error]]
$color[ff0000]
$footer[🗃 Error Log ~ serverID #COLON# $guildID]
$addTimestamp`
})

//for console
bot.readyCommand({
  channel: "",
  code: `
$log[
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
╭───────────────────────────────────────────────
│ Active On $userTag[$clientID]
❑───────────────────────────────────────────────
│ Owner: $userTag[$botOwnerID]
❑───────────────────────────────────────────────
│ Ping: $pingms
│ dbPing: $databasePingms
│ Cpu: $cpu%
│ Ram: $truncate[$ram] MB
│ NodeJS: $nodeVersion
│ Package: Aoi.js v$packageVersion
❑───────────────────────────────────────────────
│  Created by ©Zanixon Development
╰───────────────────────────────────────────────
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
]
`
})