module.exports = ({
    name: "premium",
    $if: "v4",
    code: `
$color[1;$getVar[color]]
$if[$getGlobalUserVar[premium;$authorID]==false]
$title[1;Premium User]
$description[1;
You don't have premium $nickname[$authorID;$guildID;yes]!
]

$else
$title[1;Premium User]
$description[1;
You have become a **Premium** user and have benefited from **Premium** users now 

**Expired <t:$getGlobalUserVar[expired;$authorID]:R>**
]

$endif
`
})