import express from 'express'
import * as Controller from '../controllers/author.controllers';

const router = express.Router()



router.post('/add-author',Controller.AddAuthor)


export {router as AuthorRouter}

