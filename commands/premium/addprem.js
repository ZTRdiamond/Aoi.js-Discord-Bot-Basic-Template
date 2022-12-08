module.exports = ({
    name: "addprem", 
    code: `
$color[1;$getVar[color]]
$title[1;Add Premium User]
$description[1;
Success added $usertag[$mentioned[1]] to **Premium** user!
**Expired <t:$message[1]:R>**
]
$setGlobalUserVar[premium;true;$mentioned[1]]
$setGlobalUserVar[expired;$message[1];$mentioned[1]]

$onlyIf[$getGlobalUserVar[premium;$mentioned[1]]==false;{newEmbed:{color:ff0000}{description:The user you mentioned already has premium before, If you want to add expiration time you can use \`$getServerVar[prefix]setprem <unix time>\` to set new expired time for user!}}]

$onlyIf[$isBot[$mentioned[1]]==false;{newEmbed:{color:ff0000}{description:You can't add bots as a premium user!}}]

$onlyIf[$userExists[$mentioned[1]]==true;{newEmbed:{color:ff0000}{description:Failed add premium to user!
**Reason:** User doesn't exists in discord!}}]

$onlyIf[$message[1]>=$truncate[$math[$datestamp/1000]];{newEmbed:{color:ff0000}{description:The time you provided has passed today's time, Please enter a longer unix time!

**Datestamp now:** $datestamp}}]

$argsCheck[>1;{newEmbed:{color:ffbd00}{description:Missing user mentioned!}}]
$argsCheck[>0;{newEmbed:{color:ffbd00}{description:Enter unix datestamp for premium expiration!
[get unix date here](https://unixtime.org/) or [here!](https://www.epochconverter.com/)}}]

$onlyForIDs[$botOwnerID;776443229893034064;]
`
})