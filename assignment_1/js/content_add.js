window.onload = function () {
	let recommendContents = document.getElementsByClassName("recommend-contents-grid")[0];
	let newContents = document.getElementsByClassName("new-contents-grid")[0];
	let jobOffer = document.getElementsByClassName("job-offer")[0];
	let content = `
	<div class="content">
		<img src="https://www.terminix.co.kr/wp-content/uploads/2020/03/placeholder.png" alt=""
			class="thumbnail">
		<div class="content-preview">
			<h4>This is Title</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatem. Sit harum quos
				molestiae dicta soluta laudantium cumque facere tempora consectetur. Laudantium
				temporibus obcaecati modi tempore fuga, provident laborum quos.</p>
			<ul class="content-category">
				<li>category1</li>
				<li>category2</li>
				<li>category3</li>
			</ul>
		</div>
		<div class="author">
			<img src="https://www.terminix.co.kr/wp-content/uploads/2020/03/placeholder.png" alt="">
			<p class="author-name">authorName</p>
		</div>
	</div>
	`;

	let offer = `
	<div class="offer">
		<img src="https://www.terminix.co.kr/wp-content/uploads/2020/03/placeholder.png" alt=""
			class="company-logo">
		<div class="job-description">
			<p class="job-position">JOB POSITION</p>

			<p class="company-name">COMPANY NAME</p>

			<p class="company-info">DESCRIPTION</p>
		</div>
	</div>
	`

	let ad = `<div class="ad"></div>`
	for (let i = 0; i < 3; i++) {
		recommendContents.innerHTML += content;
		jobOffer.innerHTML += offer;
	}
	jobOffer.innerHTML += ad;

	for (let i = 0; i < 19; i++) {
		newContents.innerHTML += content;
	}
};

