const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('<a href="./ma-page">Lien vers ma page</a>')
})

app.get('/ma-page', (req, res) => {
    res.send('<form action="/creer-fichier"><input type="text" name="mon_input"></form>')
})

app.get('/creer-fichier', (req, res) => {
    const fs = require('fs');

    let file_path = "./src";
    let file_name = "log.json";
    let Date = new Date();
    let month = Date.getMonth();
    let dateday = Date.getDate();
    let hours = Date.getHours();
    let minute = Date.getMinutes();
    let second = Date.getSeconds();
    let time = `${date} à ${hours}h${minute}min${second}sec`;
    let content = (day + ":" + req.query.mon_input + ";")


    try {


        // let data = fs.readFileSync("./" + "test.txt")
        // let data_f = data + content
        // let data = fs.readFileSync(file_path + file_name);
        // let jsonData = JSON.parse(data);
        // if (Array.isArray(jsonData)) {
        //     jsonData.push(content);
        // } else {
        //     jsonData = [jsonData, content];
        // }

        // fs.writeFileSync(file_path + file_name, JSON.stringify(jsonData));

        fs.writeFileSync('fichier_txt/fichier_du_' + time + '.txt', content);
        res.send("Fichier créé");
    } catch (err) {
        console.error(err);
        res.send("Echec de la création du fichier.");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})