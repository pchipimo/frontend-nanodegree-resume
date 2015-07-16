/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Chitula Chipimo");

// var awesomeThoughts = "I am Chitula and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// console.log(awesomeThoughts);


var formattedName = HTMLheaderName.replace("%data%", "Chitula Chipimo");
var formattedRole = HTMLheaderRole.replace("%data%", "Android | Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
