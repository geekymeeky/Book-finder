import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Bookshelf from './Bookshelf';

const SearchBar = () => {
    const [book, setBook] = useState("Books");
    const [books, setBooks] = useState([]);

    async function requestBooks(){
        if(book){
            const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${book}`
            )
            const json = await res.json();
            setBooks(json.items);
            console.log(books);
        }
    }

    return (
        <div>
            <form className="flex justify-center" onSubmit={(e) => {
                e.preventDefault();
                requestBooks();
            }}>
                <input className="rounded-full py-3 px-6 outline-none focus:ring-2 focus:ring-gray-400" style={{width: "50%"}} placeholder="Search a book" value={book} onInput={(e) => setBook(e.target.value)}/>
                <button className="rounded-full mx-3 p-3 bg-white items-center justify-center focus:outline-none" type="submit"><SearchIcon/></button>
            </form>
            <Bookshelf books={books}/>
        </div>
    )
}

export default SearchBar;
