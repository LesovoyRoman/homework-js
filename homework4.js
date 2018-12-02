const BagDefault = {
	mirror: false,
	aroma: false,
	umbrella: false,
}

const BookDefault = {
	title: 'noTitle',
	year: 'noYear',
	author: 'noAuthor'
}

function Bag() {
	this.mirror = BagDefault.mirror;
	this.aroma = BagDefault.aroma;
	this.umbrella = BagDefault.umbrella;
	
    this.setOption = (option, payload) => {
		this[option] = payload;
	}
}

function LibraryBook(book) {
	this.title = book.title || BookDefault.title;
	this.year = book.year || BookDefault.year;
	this.author = book.author || BookDefault.author;
	this.readerName = book.readerName || '';
	this.readerData = book.readerData || '';
	
	giveTheBook = (client) => {
		this.readerName = client.name;
		this.readerData = new Date();
	}
	
	this.getBookInfo = () => {
		console.log(this.readerData);
	}
	
	this.getTheBook = (client) => {
		!this.readerName ? 
			giveTheBook(client) 
			: 
			console.error(`the book ${this.title} is being read`)
	}
	
	this.returnBook = () => {
		this.readerName = '';
		this.readerData = '';
	}
}