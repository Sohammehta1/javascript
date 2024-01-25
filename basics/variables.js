const accountId = 1323
let accountEmail = "samm23j@gmail.com" // use this instead of var(issue in scope)
var accountPassword = "1234"  
var accountCity

console.log(accountId)
console.table([accountId, accountEmail, accountPassword,accountCity])

// alert cannot be used in node js
// null => standalone value
// undefined => value not assinged yet
// symbol => unique
// integers range => 1 to 2^53

console.log("Type of 'null' : "+typeof(null))


