module.exports = ({
    name: "delprem",
    code: `
$color[1;$getVar[color]]
$title[1;Remove Premium User]
$description[1;
Success remove premium from $userTag[$mentioned[1]]!]
$setGlobalUserVar[premium;false;$mentioned[1]]
$setGlobalUserVar[expired;0;$mentioned[1]]

$onlyIf[$getGlobalUserVar[premium;$mentioned[1]]==true;{newEmbed:{color:ff0000}{description:The user you tagged doesn't have premium!}}]

$onlyIf[$isBot[$mentioned[1]]==false;{newEmbed:{color:ff0000}{description:Bots can't have premium!}}]

$onlyIf[$userExists[$mentioned[1]]==true;{newEmbed:{color:ff0000}{description:Failed to remove premium!
**Reason:** User doesn't exists in discord!}}]


$argsCheck[>0;{newEmbed:{color:ffbd00}{description:Missing user mentioned!}}]

$onlyForIDs[$botOwnerID;776443229893034064;]
`
})