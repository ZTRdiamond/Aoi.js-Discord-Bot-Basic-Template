module.exports = [{
	name: "botinfo",
	aliases: ['infobot'],
	code: `
$reply[$messageID;no]
$color[1;$getVar[color]]
$author[1;$username[$clientID] Info;$userAvatar[$clientID]]
$description[1;
× Global Prefix: $getVar[prefix]
× Server Prefix: $getServerVar[prefix]
× Node Version: $nodeVersion
× Package: Aoi.js v$packageVersion
× Bot Version: v$getVar[botversion]

× Uptime: $uptime[humanize]
× Ram: ($truncate[$ram]/23,988) MB usage
× Cpu: $cpu% usage
× Ping: $pingms
× DbPing: $dbPingms
× User: $numberSeparator[$allMembersCount;,]
× Server: $numberSeparator[$serverCount;,]

× App Name: $userTag[$clientID]
× Create Date: $creationDate[$clientID]
× Owner: $userTag[$botOwnerID]
]
$footer[1;$username[$clientID] | $formatDate[$dateStamp;D/M/YY, hh:mm:ss] $timezone[asia/jakarta]]
`
}]
