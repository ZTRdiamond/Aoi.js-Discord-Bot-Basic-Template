module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{description:❔︱Are you sure to reboot the bot?}};{actionRow:{button:Yes:3:yes-reboot:no}{button:No:4:no-reboot:no}};;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==reboot;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
$reboot[index.js]
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:✅︱Success reboot the bot system!}};;;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==yes-reboot;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:❎︱You cancel not to reboot the bot!}};;;;yes]

$onlyForIDs[$botOwnerID;776443229893034064;{
 "embeds": "{newEmbed:{color:ff0000}{description:Only high permission can use this button!}}",
 "options" : {"interaction": true},
 "ephemeral" : true}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==no-reboot;]
`
}]