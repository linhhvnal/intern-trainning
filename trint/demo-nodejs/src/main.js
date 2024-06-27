import express from "express"
import configViewEngine from "./config/viewEngine";

const app = express();
const port = 8080

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/more', (req, res) => {
    res.send('hello again')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})