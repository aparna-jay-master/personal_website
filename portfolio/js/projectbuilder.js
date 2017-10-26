var projects = {
	"project": [{
		"projectName": "Personal Travel Portfolio",
		"githubLink": "https://github.com/aparna-jay-master/Portfolio-Travel",
		"imageUrl": "media/travel.gif",
		"imageAlt": "Travel website",
		"projectDescription": "A personal travel site designed and created by me. I utilized Bootstrap to make the site responsive. The travel data is stored in a JSON array. The Google Maps API runs through the array to place the pins and create the custom info windows.<br><br>Live Site: https://aparna-jay-master.github.io/Portfolio-Travel/",
		"projectSkills": "HTML/CSS, JavaScript, jQuery, JSON, Bootstrap, Google Maps API"
	},
	{
		"projectName": "Lipstick Inventory Android App",
		"githubLink": "https://github.com/aparna-jay-master/Lipstick-Inventory",
		"imageUrl": "media/lipstick.gif",
		"imageAlt": "Lipstick Inventory Android App",
		"projectDescription": "A simple inventory app to store information about different lipsticks in stock. I was provided some basic specs on required functionality; design and overall flow were created by me.",
		"projectSkills": "Java, XML, SQLite, Google Custom Search API"	
	}],

	"display": function () {
		for (i = 0; i < (projects.project.length); i++){
			$("#projectList").append(HTMLitemStart);

			var formattedTitle = HTMLtitle.replace("%data%", projects.project[i].projectName);
			$(".box:last").append(formattedTitle);

			var formattedGithub = HTMLgithub.replace("%data%", projects.project[i].githubLink);
			$(".box:last").append(formattedGithub);

			var formattedImageUrl = HTMLimageUrl.replace("%data%", projects.project[i].imageUrl);
			var formattedImageAlt = HTMLimageAlt.replace("%data%", projects.project[i].imageAlt);
			var formattedImageAll = formattedImageUrl + formattedImageAlt;
			$(".box:last").append(formattedImageAll);

			var formattedDescription = HTMLdescription.replace("%data%", projects.project[i].projectDescription);
			$(".box:last").append(formattedDescription);

			var formattedSkills = HTMLskills.replace("%data%", projects.project[i].projectSkills);
			$(".box:last").append(formattedSkills);

			$(".box:last").append(HTMLline);
		}
	}
};

projects.display();