import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  DashboardContainer,
  Content,
  Header,
  StatsContainer,
  StatBox,
  SearchBar,
  BookList,
  BookItem,
} from '../../styles/DashboardStyles';

const LibraryDashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Static books with cover images and added dates
  const staticBooks = [
    {
      id: 101,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      genre: 'Finance',
      copies: 5,
      coverImage: 'https://via.placeholder.com/150',
      addedDate: '2024-06-01',
    },
    {
      id: 102,
      title: 'Company of One',
      author: 'Paul Jarvis',
      genre: 'Business',
      copies: 3,
      coverImage: 'https://via.placeholder.com/150',
      addedDate: '2024-05-28',
    },
    {
      id: 103,
      title: 'How Innovation Works',
      author: 'Matt Ridley',
      genre: 'Innovation',
      copies: 4,
      coverImage: 'https://via.placeholder.com/150',
      addedDate: '2024-06-03',
    },
    { id: 104, title: 'A Palm from Our Future', author: 'Samira Hadi', genre: 'Fiction', copies: 7 },
    { id: 105, title: 'The Black Universe', author: 'Greta Mae Evans', genre: 'Science', copies: 2 },
    { id: 106, title: 'Nefarious Games', author: 'Ana Park', genre: 'Mystery', copies: 6 },
  ];

  // Fetch books and combine with static books
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/library/books');
      const combinedBooks = [...response.data.books, ...staticBooks];
      setBooks(combinedBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
      setBooks(staticBooks);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle book search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter and sort books
  const filteredBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate)); // Sort by most recent date

  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Header>Discover</Header>

        <StatsContainer>
          <StatBox>Total Books: {filteredBooks.length}</StatBox>
          <StatBox>
            Available Copies: {filteredBooks.reduce((sum, book) => sum + book.copies, 0)}
          </StatBox>
        </StatsContainer>

        <SearchBar
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Book Cards */}
        <BookList className="grid grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={book.coverImage || 'https://via.placeholder.com/150'}
                alt={book.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-sm text-gray-500">Genre: {book.genre}</p>
                <p className="text-sm text-gray-500">Copies: {book.copies}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Added on: {new Date(book.addedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </BookList>
      </Content>
    </DashboardContainer>
  );
};

export default LibraryDashboard;
