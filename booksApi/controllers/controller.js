const books = require('../models/model');

const {  op  } = require('sequelize');


//post operation => create a new record in the database
exports.addBook = async (req,res) =>{
    try{
        let { title,author,publication_year,isbn } = req.body;

        const existingBook = await books.findOne({
            where: { title:title }
        });
        if (existingBook) {
            return res.status(409).json({
              message: "Book already exists in the database", data: []
         });
        }

        const newBook = await books.create(
            {
                title,
                author,
                publication_year,
                isbn
            }
        );

        return res.status(201).json({
            status : "success",
            message: "Book details added successfully",
            data : [newBook]
          });
    }
    catch(err){
        console.log('Error '+err);
        return res.status(400).send(err.message);

    }
}


//get all the books method implemented
exports.fetchBooks = async (req,res) =>{
    try{
        const getbooks = await books.findAll();
        return res.status(200).json({
            status : "success",
            message: "Books list fetched",
            data: getbooks,
        });
    }
    catch(err){
        return res.status(400).json({ error: err.message });
    }
}

exports.fetchBookByAuthor = async (req,res) =>{
    try{
        const author = req.params.id;

        const booksByAuthor = await books.findAll({
            where: {
              author: author
            }
          });

        if (!booksByAuthor) {
            return res.status(200).json({
              message: "Book not found!", data: []
            });
          }

        return res.status(200).json({
            status : "success",
                message: "Given book fetched.",
                data: booksByAuthor,
        });
    }
    catch(err){
        return res.status(400).json({ error: err.message });
    }

}

exports.fetchBookByTitle = async(req,res) =>{

    try{

        const title = req.params.id;

        const booksByTitle = await books.findAll({
            where:
                {
                    title: title
                }
        });

        if(!booksByTitle){
            return res.status(200).json({
            message: "No details with that title found!", data: []
            });
        }
        return res.status(200).json({
            status : "success",
            message: "Given book fetched.",
            data: booksByTitle,  
            
    });
    }
    catch(err){
        return res.status(400).json({ error: err.message });
    }
    }


 
