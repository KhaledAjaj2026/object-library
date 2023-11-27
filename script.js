const bookLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: '295',
		readOrNot: true,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: '295',
		readOrNot: 'read',
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: '295',
		readOrNot: true,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: '295',
		readOrNot: true,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
	{
		title: 'White Fang',
		author: 'Jack London',
		genre: 'Adventure Fiction',
		pageCount: '298',
		readOrNot: false,
	},
];

(function loadLibrary() {
	const container = document.querySelector('.container');

	if (bookLibrary.length) {
		for (const book of bookLibrary) {
			const newCard = document.createElement('div');
			newCard.setAttribute('class', 'card');

			// const cardText = `${book.title}\n${book.author}\n${book.genre}\n${
			// 	book.pageCount
			// }\n${book.readOrNot ? 'read' : 'not read'}`;
			// newCard.innerText = cardText;

			const newTitle = document.createElement('h3');
			newTitle.setAttribute('class', 'title');
			newTitle.textContent = book.title;

			const newAuthor = document.createElement('i');
			newAuthor.setAttribute('class', 'author');
			newAuthor.textContent = book.author;

			const newGenre = document.createElement('p');
			newGenre.setAttribute('class', 'genre');
			newGenre.textContent = book.genre;

			const newPageCount = document.createElement('p');
			newPageCount.setAttribute('class', 'page-count');
			newPageCount.textContent = book.pageCount;

			const newRead = document.createElement('p');
			newRead.setAttribute('class', 'read-or-not');
			if (book.readOrNot) newRead.textContent = 'read';
			else newRead.textContent = 'not read';

			newCard.appendChild(newTitle);
			newCard.appendChild(newAuthor);
			newCard.appendChild(newGenre);
			newCard.appendChild(newPageCount);
			newCard.appendChild(newRead);

			container.appendChild(newCard);
		}
	} else {
		container.textContent = 'no books here!';
	}
})();

function Book(title, author, genre, pageCount, readOrNot) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageCount = pageCount;
	this.readOrNot = readOrNot;
}

function createBook(title, author, genre, pageCount, readOrNot) {}

function openForm() {
	document.querySelector('.new-book_form').classList.toggle('hidden');
}

function closeForm() {
	const form = document.querySelector('.new-book_form');
	form.reset();
	form.classList.toggle('hidden');
}
