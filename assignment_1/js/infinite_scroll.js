window.onscroll = function (e) {
	//body 끝에 닫기 전에 실행,
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 680) {
		addContents();
	}
};
f

function addContents() {
	let newContents = document.getElementsByClassName("new-contents-grid")[0];
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
	for (let i = 0; i < 8; i++) {
		newContents.innerHTML += content
	}
}