/** Holds all book-objects, library is loaded by looping through this array. */
const bookLibrary = [
	{
		id: 0,
		title: 'The Hobbit 1',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: 100,
		readOrNot: 'not read',
	},
	{
		id: 1,
		title: 'The Hobbit 2',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: 51,
		readOrNot: 'not read',
	},
	{
		id: 2,
		title: 'The Hobbit 3',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: 421,
		readOrNot: 'not read',
	},
	{
		id: 3,
		title: 'The Hobbit 4',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: 432,
		readOrNot: 'not read',
	},
	{
		id: 4,
		title: 'The Hobbit 5',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		pageCount: 3,
		readOrNot: 'not read',
	},
];

/** Loop through array 'bookLibrary' and create node for each book-object. */
function loadLibrary() {
	const container = document.querySelector('.container');
	container.textContent = '';
	let i = 0;

	for (const book of bookLibrary) {
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
		newPageCount.textContent = `${book.pageCount} pages`;

		const newRead = document.createElement('p');
		newRead.setAttribute('class', 'read-or-not');
		newRead.textContent = book.readOrNot;

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.setAttribute('type', 'button');
		deleteButton.setAttribute('class', 'delete-button');
		deleteButton.setAttribute('onclick', `deleteCard(${i})`);

		newCard.appendChild(newTitle);
		newCard.appendChild(newAuthor);
		newCard.appendChild(newGenre);
		newCard.appendChild(newPageCount);
		newCard.appendChild(newRead);
		newCard.appendChild(deleteButton);

		container.appendChild(newCard);
		i++;
	}
}
// Initial site load to show pre-existing books.
loadLibrary();

/** Book constructor, template for new book. */
function Book(id, title, author, genre, pageCount, readOrNot) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageCount = pageCount;
	this.readOrNot = readOrNot;
}

/** Take user input from form-data and create new book. */
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

/** Toggle form opened. */
const openForm = () => {
	document.querySelector('.new-book_form').classList.toggle('hidden');
};

/** Toggle form closed. */
const closeForm = () => {
	const form = document.querySelector('.new-book_form');
	form.reset();
	form.classList.toggle('hidden');
};

// Listen for submit, initiate book creation upon data submission.
addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	createBook(formProps);
	closeForm();
});

/** Splice card of specified index from 'bookLibrary', then load library. */
const deleteCard = (index) => {
	bookLibrary.splice(index, 1);
	loadLibrary();
};
