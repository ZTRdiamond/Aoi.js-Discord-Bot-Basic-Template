module.exports = ({
    name: "setprefix",
    code: `
$setServerVar[prefix;$message[1]]
$color[1;$getVar[color]]
$title[1;Setprefix]
$description[1;
Set new bot prefix to **__$message[1]__** in $guild!]
$footer[1;Setting request by $nickname[$authorID;$guildID;yes]]

$argsCheck[>0;{newEmbed:{color:ffbd00}{description:Please input a new prefix to set in this server!}}]

$onlyPerms[manageserver;{newEmbed:{color:ff0000}{description:Failed to set prefix, Missing \`MANAGESERVER\` permission!}}]
`
})