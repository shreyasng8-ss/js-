const accountId = 144553
let accountEmail = "Shreya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountId can't be changed (constant)
accountEmail= "shreyasng@google.com"
accountPassword = "2345678"
accountCity = "Mumbai"

//prints the result in tabular form 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
 
// prefer not to use var because of issue in block scope and functional scope