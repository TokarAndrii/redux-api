const express = require('express');
const {sendAllArticles, sendJsonResp,
    sendArticleById,sendArticleByAuthor} = require('../controllers/articlesConrtrollers')
const router = express.Router()

router.get('/', sendAllArticles, sendJsonResp)

router.get('/:id', sendArticleById, sendJsonResp)

//router.get('/:author', sendArticleByAuthor, sendJsonResp)

module.exports = router;