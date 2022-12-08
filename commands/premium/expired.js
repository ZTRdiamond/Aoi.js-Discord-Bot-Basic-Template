module.exports = ({
    name: "$alwaysExecute",
    code: `
$dm[$authorID]
$color[1;$getVar[color]]
$description[1;
Your premium has expired now, You can extend this by buying premium again!
]
$footer[1;Thank you for being our premium user ^_^]
$setGlobalUserVar[premium;false;$authorID]
$setGlobalUserVar[expired;0;$authorID]

$onlyIf[$getGlobalUserVar[premium;$authorID]==true;]
$onlyIf[$truncate[$math[$datestamp/1000]]>=$getGlobalUserVar[expired;$authorID];]
`,nonPrefixed: true 
})