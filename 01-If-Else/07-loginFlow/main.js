let username = prompt("Username");
let password = prompt("Password");

message = username || password == '' 
? "username is required"
: (username == 'admin' && password == '1234') ||
(username == 'john' && password == 'qwerty') 
? "Hello " + username
: "Invalid username or password";
alert(message);