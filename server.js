const express = require ("express");
const mongoose = require ("mongoose");
const Book = require ("./models/book");
const Member = require ("./models/member");

const server = express();

const databaseURL = "mongodb+srv://testUser:testUser@cluster0.lhjbv.mongodb.net/lms?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});

server.use(express.urlencoded({ extended: true }));  //front end eken ena encoded data decode krnna use krn function eka
server.use(express.json()); 

// let books = [
//     {
//         id: "1",
//         title: "ABC murders",
//         author: "Agatha Christie",
//         isAvailable: true,
//         burrowedMemberId: "",
//         burrowedDate: "", 
//     },
//     {
//         id: "2",
//         title: "Matilda",
//         author: "Roald Dhal",
//         isAvailable: true,
//         burrowedMemberId: "",
//         burrowedDate: "", 
//     },
// ];

// ==========================================================
//                     Book API
// ========================================================== 

// /book - view all books
server.get("/book", async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

// /book/:id - view single book
server.get("/book/:id", async (req,res) => {
    const id = req.params.id;
    // const book = books.find((book) => book.id === id);
    // res.send(book);

    const book = await Book.findById(id);
    res.send(book);
});

// /book : POST - Create Book
// title, author
server.post("/book", async (req, res) => {
    const { title, author } = req.body;
    //const title = req.body.title;
    //const author = req.body.author;

    // create book object and push it to the book array
    // const book = {
    //     id: Math.random().toString(16).slice(2),
    //     title,
    //     author,
    //     isAvailable: true,
    //     burrowedMemberId: "",
    //     burrowedDate: "",
    // };
    // books.push(book);
    // res.send(book);

    const book = new Book({ title, author });
    const response = await book.save();
    res.send(response);  
});

// /book/:id/burrow: Burrow book
// /book/1/burrow
// burrowedMemberId, burrowedDate
server.put("/book/:id/burrow", async (req, res) => {
    const id = req.params.id;
    const { burrowedMemberId, burrowedDate } = req.body;

    // const bookIndex = books.findIndex((book) => book.id === id);

    // books[bookIndex] = {
    //     ...books[bookIndex], //thiyna operator ekakma use krnwa nm spread operator ek gannawa(...)
    //     isAvailable: false,   // ethkota book eke thiyna value set eka ehemam watena athara ekata aluthen add wenna one ewa pahalin sdahan krnn puluwn
    //     burrowedMemberId,
    //     burrowedDate,                   
    // }

    // res.send(books[bookIndex]);

    const book = await Book.findByIdAndUpdate(id, {
        isAvailable: false,   // ethkota book eke thiyna value set eka ehemam watena athara ekata aluthen add wenna one ewa pahalin sdahan krnn puluwn
        burrowedMemberId,
        burrowedDate,
    });
    res.send(book);
});

// /book/:id/return: Return book
// /book/1/return
server.put("/book/:id/return", async (req, res) => {
    const id = req.params.id;

    // const bookIndex = books.findIndex((book) => book.id === id);

    // books[bookIndex] = {
    //     ...books[bookIndex], //thiyna operator ekakma use krnwa nm spread operator ek gannawa(...)
    //     isAvailable: true,   // ethkota book eke thiyna value set eka ehemam watena athara ekata aluthen add wenna one ewa pahalin sdahan krnn puluwn
    //     burrowedMemberId: "",
    //     burrowedDate: "",                   
    // }

    // res.send(books[bookIndex]);

    const book = await Book.findByIdAndUpdate(id, {
        isAvailable: true,   // ethkota book eke thiyna value set eka ehemam watena athara ekata aluthen add wenna one ewa pahalin sdahan krnn puluwn
        burrowedMemberId: "",
        burrowedDate: "",
    });
    res.send(book);
});

// /book/:id: Edit book
// /book/1
// title, author
server.put("/book/:id", async (req, res) => {
    const id = req.params.id;
    const { title, author } = req.body;

    // const bookIndex = books.findIndex((book) => book.id === id);

    // books[bookIndex] = {
    //     ...books[bookIndex], //thiyna operator ekakma use krnwa nm spread operator ek gannawa(...)
    //     title,
    //     author,                   
    // }

    // res.send(books[bookIndex]);

    const book = await Book.findByIdAndUpdate(id, {
        title,
        author,
    });
    res.send(book);

});

// /book/:id/delete: Delete book
// /book/1/delete
server.delete("/book/:id", async (req, res) => {
    const id = req.params.id;

    // books = books.filter((book) => book.id !== id);
    // res.send(id);

    const book = await Book.findByIdAndDelete(id);
    res.send(id);
});

// ==========================================================
//                     Member API
// ==========================================================                    
// /member - view all members
server.get("/member", async (req, res) => {
    const members = await Member.find();
    res.send(members);
});

// /member/:id - view single member
server.get("/member/:id", async (req,res) => {
    const id = req.params.id;

    const member = await Member.findById(id);
    res.send(member);
});

// /member : POST - Create member
// nic, firstName,middleName,lastName,contactNumber,address,userType
server.post("/member", async (req, res) => {
    const { 
        nic, 
        firstName,
        middleName,
        lastName,
        contactNumber,
        address,
        userType
    } = req.body;

    const member = new Member({ nic, firstName,middleName,lastName,contactNumber,address,userType });
    const response = await member.save();
    res.send(response);  
});

// /member/:id: Edit member
// /member/1
// nic, firstName, middleName, lastName, contactNumber, address, userType
server.put("/member/:id", async (req, res) => {
    const id = req.params.id;
    const { 
        nic, 
        firstName,
        middleName,
        lastName,
        contactNumber,
        address,
        userType
     } = req.body;

    const member = await Member.findByIdAndUpdate(id, {
        nic, 
        firstName,
        middleName,
        lastName,
        contactNumber,
        address,
        userType,
    });
    res.send(member);

});

// /member/:id/delete: Delete member
// /member/1/delete
server.delete("/member/:id", async (req, res) => {
    const id = req.params.id;

    const member = await Member.findByIdAndDelete(id);
    res.send(id);
});