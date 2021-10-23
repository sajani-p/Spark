const express = require("express");
const cors = require("cors");

const server = express();

server.listen(3001, () => {
   console.log("Server running on port 3001");
});

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

let books = [
   {
      id: "1",
      title: "Harry Potter",
      author: "J. K. Rowling",
      isAvailable: true,
      burrowedMemberId: "",
      burrowedDate: "",
   },
   {
      id: "2",
      title: "Charlie and the Chocolate Factory",
      author: "Roald Dahl",
      isAvailable: true,
      burrowedMemberId: "",
      burrowedDate: "",
   },
];

function print(string) {
   console.log(string);
}

server.get("/book", (req, res) => {
   res.send(books);
});

server.get("/book/:id", (req, res) => {
   const id = req.params.id;
   const book = books.find((book) => book.id === id);
   res.send(book);
});

server.post("/book", (req, res) => {
   const { title, author } = req.body;

   const book = {
      id: Math.random().toString(16).slice(2),
      title,
      author,
      isAvailable: true,
      burrowedMemberId: "",
      burrowedDate: "",
   };
   books.push(book);
   res.send(book);
});

server.put("/book/:id/burrow", (req, res) => {
   const id = req.params.id;
   const { burrowedMemberId, burrowedDate } = req.body;

   const bookIndex = books.findIndex((book) => book.id === id);
   books[bookIndex] = {
      ...books[bookIndex],
      isAvailable: false,
      burrowedMemberId,
      burrowedDate,
   };
   res.send(books[bookIndex]);
});

server.put("/book/:id/return", (req, res) => {
   const id = req.params.id;

   const bookIndex = books.findIndex((book) => book.id === id);
   books[bookIndex] = {
      ...books[bookIndex],
      isAvailable: true,
      burrowedMemberId: "",
      burrowedDate: "",
   };

   res.send(books[bookIndex]);
});

server.put("/book/:id", (req, res) => {
   const id = req.params.id;
   const { title, author } = req.body;

   const bookIndex = books.findIndex((book) => book.id === id);
   books[bookIndex] = {
      ...books[bookIndex],
      title,
      author,
   };

   res.send(books[bookIndex]);
});

server.delete("/book/:id", (req, res) => {
   const id = req.params.id;

   books = books.filter((book) => book.id !== id);
   res.send(id);
});

/*================================Member Controllers============================================*/

let members = [
   {
      id: "1",
      nic: "924561237V",
      firstName: "Ruwan",
      middleName: "Lakshitha",
      lastName: "Silva",
      contactNumber: "071-7892146",
      address: "NO:045 Pragathipura, Nugegoda",
      userType: "School",
   },
   {
      id: "2",
      nic: "984561237V",
      firstName: "Namal",
      middleName: "Lakshitha",
      lastName: "Silva",
      contactNumber: "071-7889356",
      address: "NO:042 Delpawaththa,Mahagama",
      userType: "University",
   },
];

server.post("/member", (req, res) => {
   const {
      nic,
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      userType,
   } = req.body;

   const member = {
      id: Math.random().toString(16).slice(2),
      nic,
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      userType,
   };
   members.push(member);
   res.send(member);
});

server.put("/member/:id", (req, res) => {
   const id = req.params.id;
   const {
      nic,
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      userType,
   } = req.body;

   const memberIndex = members.findIndex((member) => member.id === id);
   members[memberIndex] = {
      ...members[memberIndex],
      nic,
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      userType,
   };
   res.send(members[memberIndex]);
});

server.get("/member", (req, res) => {
   console.log(members);
   res.send(members);
});

server.get("/member/:id", (req, res) => {
   const id = req.params.id;
   const member = members.find((member) => member.id === id);
   res.send(member);
});

server.delete("/member/:id", (req, res) => {
   const id = req.params.id;
   const member = members.find((member) => member.id === id);
   members.splice(members.indexOf(member), 1);
   res.send({ id: id });
});
