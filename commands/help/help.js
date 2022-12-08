module.exports = [{
    name: "help",
    aliases: ['cmd','command','h'],
    code: `
$color[1;$getVar[color]]
$title[1;Help Commands]
$description[1;
Bot prefix in this server is **$getServerVar[prefix]**

**General Commands**
***\`\`\`
setprefix, ping, botinfo.
\`\`\`***
]
$thumbnail[$userAvatar[$clientID]]
$footer[1;$username[$clientID] | $formatDate[$dateStamp;D/M/YY, hh:mm:ss] $timezone[asia/jakarta]]

`
}]