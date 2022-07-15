
const express = require("express");
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', { titulo: "Dure casi 4 horas aqui de a nada." })
})

module.exports = router;
