const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const path = require('path')
const https = require('https');
const fs = require('fs');

const PORT = process.env.PORT || 3051;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", require("./routes")); для продакшина
app.use(require("./routes")); // для разработки

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/abcRealtor`)
    console.log(chalk.bold.magentaBright("MongoDB подключен"));

     if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
     }

    if(process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(chalk.bold.magentaBright(`Сервер подключен на порте ${PORT}`)
        )
      });
    }
    else {
      https.createServer({
        key: fs.readFileSync('/etc/ssl/istanbul-expert.site.key'),
        cert: fs.readFileSync('/etc/ssl/istanbul-expert.site.crt'),
        requestCert: false,
        rejectUnauthorized: false
      }, app).listen(443, () => {
        console.log("Слушаю на https на 443 порте...")
      })
    }
  } catch (e) {
    console.log(chalk.bgRed.white(`Ошибка при подключении: ${e.toString()}`));
  }
}

start()


