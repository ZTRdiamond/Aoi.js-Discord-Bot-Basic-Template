module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{description:βοΈ±Are you sure to reload all commands?}};{actionRow:{button:Yes:3:yes-reload:no}{button:No:4:no-reload:no}};;;yes]

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
πΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉ
β­βββββββββββββββββββββββββββββββββββββββββββββββ
β Active On $userTag[$clientID]
ββββββββββββββββββββββββββββββββββββββββββββββββ
β Owner: $userTag[$botOwnerID]
ββββββββββββββββββββββββββββββββββββββββββββββββ
β Ping: $pingms
β dbPing: $dbpingms
β Cpu: $cpu%
β Ram: $truncate[$ram] MB
β NodeJS: $nodeVersion
β Package: Aoi.js v$packageVersion
β Uptime: $uptime
ββββββββββββββββββββββββββββββββββββββββββββββββ
β Uptime Date: $formatDate[$dateStamp]
β Clock: $hour:$minute:$second $timezone[asia/jakarta]
ββββββββββββββββββββββββββββββββββββββββββββββββ
β  Created by Β©Zanixon Development
β°βββββββββββββββββββββββββββββββββββββββββββββββ
πΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉπΉ
]

$updateCommands
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:βοΈ±Success reload all commands!}};;;;yes]

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
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:βοΈ±You cancel not to reload commands!}};;;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==no-reload;]
`
}]