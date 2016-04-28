// Bio Section
var bio = {
  "name" : "John Doe",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "000-000-0000",
    "email" : "john@doe.com",
    "github" : "johndoe",
    "twitter" : "@thedoeumjoe",
    "location" : "San Jose, CA"
  },
  "welcomeMessage" : "Hey, there! Welcome to my little slice of awesome!",
  "skills" : ["HTML", "CSS", "Javascript"],
  "biopic" : " ",
}
// Bio Display Function
bio.display = function() {
  var formattedBio = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedBio);
  formattedBio = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedBio);
  // HTML images
  formattedBio = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedBio);
  formattedBio = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedBio);
  formattedBio = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedBio);
  formattedBio = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedBio);
  formattedBio = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedBio);
  formattedBio = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedBio);
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    formattedBio = HTMLskills.replace("%data%", bio.skills[i]);
    console.log(formattedBio);
    $("#skills").append(formattedBio);
  }

}
bio.display();
// End of Bio Display Function

// Education Section
var education = {
  "schools" : [
    {
      "name" : "Udacity",
      "location" : "San Jose, CA",
      "degree" : "Web Development",
      "majors" : "Computer Science",
      "dates" : "04-2016",
      "url" : "http://www.udacity.com"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "date" : "04-2016",
      "url" : "htpp://udacity.com",
    }
  ]
}
// Education Display Function

// Work Section
var work = {
  "jobs" : [
    {
      "employer" : "John Doe",
      "title" : "Developer",
      "location" : "Miami, FL",
      "dates" : "05-2016"
    }
  ]
}

// Work Display Function
var projects = {
  "projects" : [
    {
      "title" : "Mock Up Article",
      "dates" : "04-2016",
      "description" : "Practice HTML syntax by converting a mockup of a blog article into a real website!",
      "images" : ""
    },
    {
      "title" : "Animal Trading Cards",
      "dates" : "04-2016",
      "description" : "Use what you've learned about CSS to convert a design prototype into a functional webpage!",
      "images" : ""
    },
    {
      "title" : "Build a Portfolio Site",
      "dates" : "04-2016",
      "description" : "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
      "images" : ""
    }
  ]
}
