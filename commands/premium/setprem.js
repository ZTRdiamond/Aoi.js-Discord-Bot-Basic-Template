module.exports = ({
    name: "setprem",
    code: `
$color[1;$getVar[color]]
$title[1;Set new premium time]
$description[1;
Successfully set the new **Premium** time to **$userTag[$mentioned[1]]** to **<t:$message[1]:R>**
]

$setGlobalUserVar[expired;$message[1];$mentioned[1]]

$onlyIf[$getGlobalUserVar[premium;$mentioned[1]]==true;{newEmbed:{color:ff0000}{description:The user you mentioned is not a premium user before!}}]

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