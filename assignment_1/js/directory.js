window.onload = function () {
	let directoryGrid = document.getElementsByClassName("directory-grid")[0];
	let directory = `
				<div class="directory">
					<div class="image-box">
						<img src="images/person_placeholder.png" alt="" class="directory-profile-img">
					</div>
					<class class="directory-name-area">

						<p class="directory-name">
							Directroy Name
						</p>
						<svg class="heart" width="22" height="20" viewBox="0 0 22 20">
							<path
								d="M5.9 0C2.2 0 0 3.2 0 5.8 0 11.4 6.4 16.7 11 20 15.6 16.7 22 11.4 22 5.8 22 3.2 19.8 0 16.1 0 14.1 0 12.3 1.6 11 3.2 9.7 1.6 7.9 0 5.9 0Z">
							</path>
						</svg>
					</class>
					<p class="directory-position">Position @COMPANY</p>
					<p class="directory-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsam corporis repellendus
						dolore quos voluptas nostrum eaque velit ipsum, neque minima nobis corrupti maiores quo officiis
						vero explicabo voluptatem amet!
					</p>
					<ul>
						<li class="directory-contact">
							<img class="portfoilo" src="images/portfolio.png" alt="portfoilio">
						</li>
						<li class="directory-contact">
							<img class="instagram" src="images/instagram.png" alt="instagram">
						</li>
						<li class="directory-contact">
							<img src="images/github.png" alt="github" class="github">
						</li>
						<li class="directory-contact">
							<img src="images/behence.png" alt="behance" class="behance">
						</li>
					</ul>

				</div>
	`;



	for (let i = 0; i < 19; i++) {
		directoryGrid.innerHTML += directory;
	}
};



window.onscroll = function (e) {
	//body 끝에 닫기 전에 실행,
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 680) {
		addContents();
	}
};

function addContents() {
	let directoryGrid = document.getElementsByClassName("directory-grid")[0];
	
	let directory = `
				<div class="directory">
					<div class="image-box">
						<img src="images/person_placeholder.png" alt="" class="directory-profile-img">
					</div>
					<class class="directory-name-area">

						<p class="directory-name">
							Directroy Name
						</p>
						<svg class="heart" width="22" height="20" viewBox="0 0 22 20">
							<path
								d="M5.9 0C2.2 0 0 3.2 0 5.8 0 11.4 6.4 16.7 11 20 15.6 16.7 22 11.4 22 5.8 22 3.2 19.8 0 16.1 0 14.1 0 12.3 1.6 11 3.2 9.7 1.6 7.9 0 5.9 0Z">
							</path>
						</svg>
					</class>
					<p class="directory-position">Position @COMPANY</p>
					<p class="directory-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsam corporis repellendus
						dolore quos voluptas nostrum eaque velit ipsum, neque minima nobis corrupti maiores quo officiis
						vero explicabo voluptatem amet!
					</p>
					<ul>
						<li class="directory-contact">
							<img class="portfoilo" src="images/portfolio.png" alt="portfoilio">
						</li>
						<li class="directory-contact">
							<img class="instagram" src="images/instagram.png" alt="instagram">
						</li>
						<li class="directory-contact">
							<img src="images/github.png" alt="github" class="github">
						</li>
						<li class="directory-contact">
							<img src="images/behence.png" alt="behance" class="behance">
						</li>
					</ul>

				</div>
	`;
	for (let i = 0; i < 8; i++) {
		directoryGrid.innerHTML += directory;
	}
}