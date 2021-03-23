var express = require('express');
var router = express.Router();
const {Category, Question, Answer} = require('../lib/models');

//grouping RESTFUL (these endpoints help us build out):
//this will fetch all the categories:
    // GET /api/v1/category
//create a question for a particular category:
    // POST /api/v1/categories/:categoryId/questions
//this will fetch questions for a particular category based on the id:
    // GET /api/v1/categories/:categoryId/questions
//create an answer for a question:
    // POST /api/v1/categories/:categoryId/questions/:questionId/answers
//fetch/list out answers for question
    // GET /api/v1/categories/:categoryId/questions/:questionId/answers

//this will fetch all the categories: GET http://localhost:3000/api/v1/categories/
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({});
    res.json(categories);
});

//create a question for a particular category: POST http://localhost:3000/api/v1/categories/1/questions
router.post('/categories/:categoryId/questions', async function(req, res, next) {
    let body = req.body;
    body.categoryId = req.params.categoryId;
    let question = await Question.create(body);
    res.json(question);
});

//this will fetch questions for a particular category based on the id: GET http://localhost:3000/api/v1/categories/1/questions
router.get('/categories/:categoryId/questions', async function(req, res, next) {
    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}});
    res.json(questions);
});

//create an answer for a question: http://localhost:3000/api/v1/categories/1/answers
router.post('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    let body = req.body;
    body.questionId = req.params.questionId;
    let answer = await Answer.create(body);
    res.json(answer);
});

//fetch/list out answers for question: GET http://localhost:3000/api/v1/categories/1/answers
router.get('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next) {
    let answers = await Answer.findAll({where: {questionId: req.params.questionId}});
    res.json(answers)
});

module.exports = router;
