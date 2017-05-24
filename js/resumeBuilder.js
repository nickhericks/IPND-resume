// this is a single line comment in javascript
/*
This is a multiline comment block in javascript
 */
var bio = {
    "name": "Nicholas Hericks",
    "role": "web developer",
    "contacts": {
        "mobile": "+258 84 625 6877",
        "email": "<a class='inline white' href='nickhericks@gmail.com'>nickhericks@gmail.com</a>",
        "github": "<a class='inline white' href='https://github.com/nickhericks'>nhericks</a>",
        "twitter": "<a class='inline white' href='https://twitter.com/nickhericks'>@nickhericks</a>",
        "location": "Maputo, Mozambique"
    },
    "welcomeMessage": "I've always been fascinated by technology and the web. In my previous positions I would often find ways to use technology to improve the work that my team and I were doing. So after a few years of dabbling with web development, in 2017 I quit my job and began studying full-time.  While I am navigating my own path through the world of programming, I don't believe anybody is completely \"self-taught\" since we all learn from others along the way. Follow my journey as I learn to code at <a class='inline' href='https://twitter.com/nickhericks'>@nickhericks</a> or <a class='inline' href='mailto:nickhericks@gmail.com'>email me</a> - I'd love to hear from you!",
    "skills": [
        "programming",
        "HTML",
        "CSS",
        "Javascript"
    ],
    "biopic": "images/nick1.jpg"
};

var work = {
    "jobs": [{
            "employer": "Habitat for Humanity International",
            "title": "Contractor",
            "location": "Maputo, Mozambique",
            "dates": "2016-2017",
            "description": "Consult and implement knowledge management strategy for various internal departments."
        },
        {
            "employer": "Habitat for Humanity International",
            "title": "Global Learning Technologies, Senior Specialist",
            "location": "Atlanta, GA",
            "dates": "2014-2016",
            "description": "Part of a small team responsible for leading organization-wide knowledge management efforts, as well as Habitat's elearning platform."
        },
        {
            "employer": "Habitat for Humanity International",
            "title": "Community Development, Technology Specialist",
            "location": "Atlanta, GA",
            "dates": "2012-2014",
            "description": "Department lead for knowledge management and social media."
        },
        {
            "employer": "Habitat for Humanity International",
            "title": "Collegiate Challenge Program, Manager",
            "location": "Americus, GA",
            "dates": "2009-2012",
            "description": "Lead knowledge management efforts and manage elearning content/platform."
        },
        {
            "employer": "AmeriCorps NCCC",
            "title": "Team Leader",
            "location": "Sacramento, CA",
            "dates": "2008-2009",
            "description": "Managed diverse team completing various projects with sponsors across the United States."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Sixteen for '16'",
            "dates": "2017",
            "description": "As part of Udacity's IPND, I used HTML and CSS to build a music playlist webpage. The page contains the top 16 songs of 2016, including artist picture and description as well as links to play songs on Spotify or YouTube.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            "title": "project2",
            "dates": "2017",
            "description": "Project description here.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
};

var education = {
    "schools": [{
            "name": "University of Wisconsin - Madison",
            "location": "Madison, WI",
            "degree": "B.S.",
            "majors": "B.S. Nonprofit Management",
            "dates": "2005-2008",
            "url": "http://www.wisc.edu/"
        },
        {
            "name": "University of Wisconsin - Milwaukee",
            "location": "Milwaukee, WI",
            "degree": "NA",
            "majors": "NA",
            "dates": "2002-2004",
            "url": "http://uwm.edu/"
        }
    ],
    "onlineCourses": [{
        "title": "Introduction to Programming",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }]
};

// Display the bio section
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var skillCount = 0;
        while (bio.skills.length > skillCount) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillCount]);
            $("#skills").append(formattedSkill);
            skillCount = skillCount + 1;
        }
    }
};
bio.display();


// Display the work section
work.display = function() {
    for (var jobsCount = 0; jobsCount < work.jobs.length; jobsCount++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobsCount].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobsCount].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[jobsCount].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobsCount].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobsCount].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


// Display the project section
projects.display = function() {
    for (var projectCount = 0; projectCount < projects.projects.length; projectCount++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectCount].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[projectCount].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectCount].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[projectCount].images.length > 0) {
            for (var imageCount = 0; imageCount < projects.projects[projectCount].images.length; imageCount++) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[projectCount].images[imageCount]);
                $(".project-entry:last").append(formattedImages);
            }
        }

    }
};
projects.display();


// Display the education section
education.display = function() {
    for (var schoolCount = 0; schoolCount < education.schools.length; schoolCount++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[schoolCount].name);
        $(".education-entry:last").append(formattedName);
        //var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolCount].degree);
        //$(".education-entry:last").append(formattedDegree);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[schoolCount].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedDescription = HTMLschoolLocation.replace("%data%", education.schools[schoolCount].location);
        $(".education-entry:last").append(formattedDescription);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolCount].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    for (var onlineCount = 0; onlineCount < education.onlineCourses.length; onlineCount++) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCount].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCount].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        //$(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCount].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCount].url);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();


//Track user clicks. Works with code in helper.js
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


//for displaying the map
$("#mapDiv").append(googleMap);
