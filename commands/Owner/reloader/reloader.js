module.exports = [{
    name: "$alwaysExecute",
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
│ Ram: $truncate[$ram]MB
│ NodeJS: $nodeVersion
│ Package: Aoi.js v$packageVersion
│ Uptime: $uptime
❑───────────────────────────────────────────────
│ Uptime Date: $formatDate[$getVar[readytime]] $timezone[asia/jakarta]
│ Time: $formatDate[$getVar[readytime];LTS] $timezone[asia/jakarta]
❑───────────────────────────────────────────────
│  Created by ©Zanixon Development
╰───────────────────────────────────────────────
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
]
$updateCommands


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
│ Uptime Date: $formatDate[$getVar[readytime]] $timezone[asia/jakarta]
│ Time: $formatDate[$getVar[readytime];LTS] $timezone[asia/jakarta]
❑───────────────────────────────────────────────
│  Created by ©Zanixon Development
╰───────────────────────────────────────────────
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
]
$updateCommands

`
}]