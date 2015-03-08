var bio = {
	"name": "Matthew Healy",
	"role": "Web Developer",
	"contacts":
	{
		"phone":"919-555-5000",
		"mobile":"919-555-5001",
		"email":"matthealync@att.net",
		"github":"matthealync",
		"location": "Apex, NC"
	},
	"biopic": "images/cartman.jpeg",
	"skills": ["HTML", "Javascript", "SQL", "PHP", "Visual Basic"],
	"welcomeMessage":"Welcome To My Webpage!",
	"display": function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",this.role);
    var formattedGeneric = HTMLcontactGeneric.replace("%data%",this.contacts.phone)
    var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
    var formattedPicture = HTMLbioPic.replace("%data%",this.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPicture);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for(var i=0;i<this.skills.length;i++) {
    	var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
    	$("#header").append(formattedSkill);
    }
    $("#topContacts").append(formattedGeneric);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedGeneric);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
	}
};
bio.display();

var work = {

  "jobs": [
    {
     "title":"Web Developer",
     "employer": "AT&T",
     "years": "1999 - Current",
     "location": "Durham, NC",
     "description": "Development of in-house web sites and databases."
    },
    {
     "title":"Communications Specialist",
     "employer": "USAF",
     "years": "1977 - 1999",
     "location" : "Multiple Locations",
     "description" : "All aspects of USAF communications systems including main frame operations, communications center operations, and small computer inventory."
    }
  ],
  "display": function() {
    for(var job in this.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].years);
      var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
      $(".work-entry:last").append(formattedEmployer);
      $(".work-entry:last").append(formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}
work.display();

var education = {
  "schools": [
        {
          "name": "Community Collage of the Air Force",
          "location": "North Charleston, SC",
          "degree": "Associates",
          "major": ["Applied Science"],
          "dates": "1999"
        }
  ],
  "onLineCourses": [
         {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": "2015"
         },
         {
            "title": "How To Use Git & GitHub",
            "school": "Udacity",
            "dates": "2015"
         },
         {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2015"
         }, {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": "2015"
         }
  ],
  display: function() {
    for(school in this.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation)
      $(".education-entry:last").append(formattedSchoolMajor);
    }
    if(this.onLineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
    }
    for(course in this.onLineCourses) {
      formattedonlineTitle = HTMLonlineTitle.replace("%data%", this.onLineCourses[course].title);
      formattedonlineSchool = HTMLonlineSchool.replace("%data%", this.onLineCourses[course].school);
      formattedonlineDates = HTMLonlineDates.replace("%data%", this.onLineCourses[course].dates);
      $(".education-entry:last").append(formattedonlineTitle);
      $(".education-entry:last").append(formattedonlineSchool);
      $(".education-entry:last").append(formattedonlineDates);
    }
  }
};

education.display();

var projects = {
  "projects": [{
      "title": "Udacity Mug",
      "dates": "2015",
      "description": "Reproduce a web page to match a mock-up.",
      "images": ["images/udacity_mug.jpg"]
  }],
  "display": function() {
    $("#projects").append(HTMLprojectStart);
    for(project in this.projects) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
      var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    }
  }
}
projects.display();
$("#mapDiv").append(googleMap);
initializeMap();