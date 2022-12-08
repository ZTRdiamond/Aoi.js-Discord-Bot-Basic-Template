module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{description:❔︱Are you sure to reload all commands?}};{actionRow:{button:Yes:3:yes-reload:no}{button:No:4:no-reload:no}};;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==reload;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
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
│ Uptime: $uptime
❑───────────────────────────────────────────────
│ Uptime Date: $formatDate[$dateStamp]
│ Clock: $hour:$minute:$second $timezone[asia/jakarta]
❑───────────────────────────────────────────────
│  Created by ©Zanixon Development
╰───────────────────────────────────────────────
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
]

$updateCommands
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:✅︱Success reload all commands!}};;;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==yes-reload;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:❎︱You cancel not to reload commands!}};;;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==no-reload;]
`
}]