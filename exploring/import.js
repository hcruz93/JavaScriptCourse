// default import

const somethingImported = require("./default_export.js");
console.log(somethingImported);

// named import

const { ThankYouForTheFish, myName } = require("./named_export.js");
console.log(ThankYouForTheFish);
console.log(myName);

const theEntireThing = require("./named_export.js");
console.log(theEntireThing);