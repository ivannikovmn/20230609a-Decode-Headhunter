const express = require('express');
//автоматом ищет в папке node_modules, если в другой то нужно что-то вроде require('./express')
const logger = require('morgan');
// const multer = require('multer')
// const upload = multer()


const app = express(); //вызываем ф-цию експресс (сервер)

app.use(logger('dev'))
// для парсинга post разных форматов:
app.use(express.urlencoded()) // должен быть перед app.post
// app.use(upload.any()) // разницы нет все будет обрабатывать аплоад, очень редко используется так
app.use(express.json())


// // Вариант1 (Базовый от разработчиков експрес)
app.get('/', (req, res) => {
    res.send("ok")
})

app.post("/api/:articleId/:lang", (req , res) => {  //:articleId - аргумент динамический
    //req=request=запрос= - то что хотим приходить с фронтента, 1ый аргумет всегда
    // res=response=ответ - то что бакенд отвечает на пришедшее с фронтента, 2ой агрумент
    console.log("req.body= ", req.body); 
    //get не должен принимать, но из-за бага Postman и vsc принимают
    // body - Тело нашего запроса. Если использовать без сериализации то не будет работать
    // get, delete - не имеют тело запроса; post, put - могут иметь тело запроса
    // console.log(req.body.email); 
    // console.log(req.headers); // принятие хедерс запроса
    console.log("req.header.authorization= ", req.headers.authorization);
    // console.log(req.headers.Authorization);  //+get
    //хоть в постмане введено Authorization но распарсирует как authorization
    // и поэтому через последний ключ нужно обращаться
    console.log("req.query= ", req.query); //+get
    //приходит как стринг в цифру *1 или как parseInt 
    // ?age=23&catid=3 - разпарсивание популярного запроса квери стрингс
    console.log("req.params=", req.params); // чтобы получить аргументы
    console.log("req.params.articleId=", req.params.articleId); //1 динамический взять
    console.log("req.params.lang=", req.params.lang);
    res.status(200).send("POST /api works");
})

// // Вариант1
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
}) 
//ф-ция листен принимает на каком порту и колл-бак(если сервер запустится сработает ф-ция консоллог)
// // Вариант2
// app.listen(3000)