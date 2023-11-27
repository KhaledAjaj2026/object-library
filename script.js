const bookLibrary = [];

function loadLibrary() {
	if (bookLibrary.length) {
		for (const book of bookLibrary) {
			const container = document.querySelector('.container');
			const newCard = document.createElement('div');
			newCard.setAttribute('class', 'card');

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
			newRead.textContent = book.readOrNot;

			newCard.appendChild(newTitle);
			newCard.appendChild(newAuthor);
			newCard.appendChild(newGenre);
			newCard.appendChild(newPageCount);
			newCard.appendChild(newRead);

			container.appendChild(newCard);
		}
	}
}

function Book(id, title, author, genre, pageCount, readOrNot) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageCount = pageCount;
	this.readOrNot = readOrNot;
}

const createBook = (formProps) => {
	const newBook = new Book(
		bookLibrary.length,
		formProps.title,
		formProps.author,
		formProps.genre,
		formProps['page-count'],
		formProps['read-or-not']
	);
	bookLibrary.push(newBook);
	loadLibrary();
};

const openForm = () => {
	document.querySelector('.new-book_form').classList.toggle('hidden');
};

const closeForm = () => {
	const form = document.querySelector('.new-book_form');
	form.reset();
	form.classList.toggle('hidden');
};

addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	createBook(formProps);
	closeForm();
});
