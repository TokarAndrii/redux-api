const Article = require('../model/articles')

const list = require('../mock-data/articles-list')


Article.insertMany(list)

module.exports = {

    async  sendAllArticles(req, res, next) {
        const articles = await Article.find()


        .then(articles => {

            req.articles = articles;

            next()
        })

        .catch(err => {
            console.log("Ups...something wrong at sendAllArticles!", err)
        })
    },

    async sendArticleById(req, res, next){
        const {id} = req.params
        const articles = await Article.findById(id)
        .then(articles => {

            req.articles = articles;

            next()
        })

        .catch(err => {
            console.log("Ups...something wrong at sendArticleById!", err)
        })
    },
/* 
    async sendArticleByAuthor(req, res, next){
        const {author} = req.params
        const articles = await Article.findOne({where: {author: author}})
        .then(articles => {

            req.articles = articles;

            next()
        })

        .catch(err => {
            console.log("Ups...something wrong at sendArticleById!", err)
        })
    }, */

    sendJsonResp(req, res, next){
        res.json(req.articles)
    }


    
}