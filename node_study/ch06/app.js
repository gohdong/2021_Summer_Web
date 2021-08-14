const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require('fs');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

try{
    fs.readdirSync('uploads');
} catch (error){
    console.error('upload폴더 생성');
    fs.mkdirSync('uploads');
}

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);


app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    },
    name: 'session-cooke'
}));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limit: {fileSize: 5 * 1024 * 1024},
})

app.use('/',indexRouter);
app.use('/user',userRouter);

app.get('/', (req, res, next) => {
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/multipart.html'));
    // console.log('GET / 요청에 실행');
    // next();
});

app.post('/upload',upload.array('many'),(req, res) =>{
    console.log(req.file,req.body);
    res.send('ok');
})

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send(err.message);
// });

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});