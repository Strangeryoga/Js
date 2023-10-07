const accountId=1235
let accountEmail="tejas@322.com"
var accountPassword="8383"
accountCity="Mumbai"
let accountState;

// accountId=2 // not allowed

accountEmail="bcec@ghe.com"
accountPassword="8338"
accountCity="Chennai"

console.log(accountId);

/* Prefer to use var because of issue in block scope and fnc scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])