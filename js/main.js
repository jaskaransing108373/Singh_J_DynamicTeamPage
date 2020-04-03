(() => {

	const teamImage = document.querySelector('#Image'),
 		teamButton = document.querySelectorAll('.info'),
    teamName = document.querySelector("#team-name"),
		teamInfo = document.querySelector('.team-info');



		const teamData = [
		["Jaskaran", `My name is Jaskaran. My dream is to become web developer and designer.
      I like to observe many trending graphics near me which are usually very
      attractive. I also like do codes and all stuff, so this is a minute example
			of my artwork.`, `jaskaran.JPG`],

		["Superman", `My name is Superman. I am friend of Jaskaran. basically I'm a superhero,
      but recently I had my interest in web developing too.. Afterall I can do anything`, `superman.jpg`],
    ];



	function animateBanners(){

			multiplier = this.dataset.offset;

			teamImage.src = `images/${teamData[multiplier][2]}`;
			teamName.textContent = `${teamData[multiplier][0]}`;
			teamInfo.textContent = teamData[multiplier][1];
		}
		teamButton.forEach(info => info.addEventListener("click", animateBanners));

	})();
