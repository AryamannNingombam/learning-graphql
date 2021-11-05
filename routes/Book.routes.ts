import express from 'express'
import * as Controller from '../controllers/book.controllers'


const router = express.Router()


router.post('/add-book',Controller.AddBook);

export {router as BookRouter}

