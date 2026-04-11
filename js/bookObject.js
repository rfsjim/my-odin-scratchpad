/**
 * bookObject.js
 * 
 * A constructor for making `book` objects
 * Book objects should have
 *  - the book’s title,
 *  - author,
 *  - the number of pages, and
 *  - whether or not you have read the book.
 *  - function info() that can report the book info 
 */

function Book(title, author, pageCount, hasBeenRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasBeenRead = hasBeenRead;

    this.info = function() {
        // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
        return `${title} by ${author}, ${pageCount} pages, read yet ${hasBeenRead}`;
    }
}