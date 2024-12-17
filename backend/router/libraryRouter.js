import express from "express";
import { getAllBooks, createBook } from "../controllers/librarianController.js";

const router = express.Router();


router.get('/getall', getAllBooks);
router.post('/books', createBook);
// // POST route for adding a new book
// router.post("/add", async (req, res) => {
//     const { title, author, isbn } = req.body;

//     // Validate the data (you can add more validations)
//     if (!title || !author || !isbn) {
//         return res.status(400).json({ message: "All fields are required." });
//     }

//     try {
//         const newBook = new Book({ title, author });
//         await newBook.save();
//         res.status(201).json({ message: "Book added successfully", book: newBook });
//     } catch (error) {
//         console.error("Error adding book:", error);
//         res.status(500).json({ message: "Failed to add book." });
//     }
// });


export default router;

