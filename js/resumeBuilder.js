/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Chitula Chipimo");

// var awesomeThoughts = "I am Chitula and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// console.log(awesomeThoughts);


var bio = {
	"name": "Chitula Chipimo",
	"role": "Android | Web Developer",
	"contact_info": "Giant smoke signal",
	"picture_URL": "https://scontent.fphl1-1.fna.fbcdn.net/hphotos-xpa1/v/t1.0-9/1513681_10153055253129366_7268596100283667014_n.jpg?oh=c3b36c0a8266988f41f64a547c8f92c6&oe=56583095",
	"welcome_message": "Mulishani!",
	"skills": "awesomeness"
};

var work = {};

work.position = "Volunteer Web Developer";
work.employer = "Ministry of Aides International";
work.years_worked = "< 1";
work.city = "Chelsea, MA";

var education = {};

education["school"] = "University of Massachusetts Amherst";
education["years_attended"] = "2011 - 2015"
education["city"] = "Amherst, MA"

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", "Means of contact:").replace("%data%", bio.contact_info);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture_URL);
var formattedMessaage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedYears = HTMLworkDates.replace("%data%", work.years_worked);
var formattedCity = HTMLworkLocation.replace("%data%", work.city);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#header").append(formattedMessaage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
$("#header").append(formattedContact);

$("#workExperience").append(formattedPosition);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedYears);
$("#workExperience").append(formattedCity);
