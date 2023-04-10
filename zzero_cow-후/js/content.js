// 글 목록에 대한 데이터
const posts = [
	{ title: '첫 번째 글', content: '첫 번째 글 내용입니다.' },
	{ title: '두 번째 글', content: '두 번째 글 내용입니다.' },
	{ title: '세 번째 글', content: '세 번째 글 내용입니다.' },
];

// 글 목록을 보여주는 함수
function showPostList() {
	const postList = document.getElementById('post-list');
	postList.innerHTML = '';
	posts.forEach((post) => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = '#';
		a.textContent = post.title;
		li.appendChild(a);
		postList.appendChild(li);
	});
}

// 글 작성 폼 제출 이벤트 핸들러
function handleFormSubmit(event) {
	event.preventDefault();
	const title = document.getElementById('post-title').value;
	const content = document.getElementById('post-content').value;
	posts.push({ title, content });
	showPostList();
	event.target.reset();
}

// 초기화 함수
function init() {
	showPostList();
	const form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}

init();
