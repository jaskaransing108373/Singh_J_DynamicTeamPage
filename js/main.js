(() => {

	const teamButton = document.querySelectorAll('.info'),
    teamName = document.querySelector("#team-name"),
		bannerImages = document.querySelector('#houseImages'),
		teamInfo = document.querySelector('.team-info');



		const teamData =[
		["Jaskaran", `My name is Jaskaran. My dream is to become web developer and designer.
      I like to observe many trending graphics near me which are usually very
      attractive.`],

		["Superman", `My name is Superman. I am friend of Jaskaran. basically I'm a superhero,
      but recently I had my interest in web developing too..`],
    ];



	function changeImageSet()
    {
    document.getElementById('Image').src="images/superman.jpg";
    
    }


	function animateBanners(){

			multiplier = this.dataset.offset;

			teamName.textContent = `${teamData[multiplier][0]}`;
			teamInfo.textContent = teamData[multiplier][1];
		}
		teamButton.forEach(info => info.addEventListener("click", animateBanners));
		teamButton.forEach(houseImages => houseImages.addEventListener("click", changeImageSet))
	})();
