let brower = prompt ("What your fav brower");

message =
brower === "Edge" 
? "You've got the Edge!"
: brower == "Chorme" || "Firefox" || "Safari" || "Opera" 
? "Okay we support these browsers too"
: "We hope that this page looks ok!"
alert (message);
