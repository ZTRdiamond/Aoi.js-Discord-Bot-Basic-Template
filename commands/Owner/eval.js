module.exports = ({
  name: "eval",
  code: `$eval[$message]
$argsCheck[>0;{newEmbed:{color:$getVar[color]}{title:Missing Code}{description:You must enter a compatible code in this bot to be tested!}}]
$suppressErrors[1;{newEmbed:{color:ff000}{description:Oops, Something went wrong!}}]

$onlyForIDs[$botOwnerID;776443229893034064;]`
})