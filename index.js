/*
 MAIN API PACKAGE
*/
const express = require('express');
const chalk = require('chalk');
const fetch = require('node-fetch');
const cors = require('cors');
const config = require('./config/config.json');

/*
  ____  _____ ______     _______ ____  
 / ___|| ____|  _ \ \   / / ____|  _ \ 
 \___ \|  _| | |_) \ \ / /|  _| | |_) |
  ___) | |___|  _ < \ V / | |___|  _ < 
 |____/|_____|_| \_\ \_/  |_____|_| \_\ cat:server

 */

const app = express();
const port = 10000;
const health = require('express-ping');

app.set('json spaces', 1);
app.use(express.static('public'));
app.use(cors());

/* BASE URL */
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/html/home.html')
});

app.get('/stats', app.use(health.ping('/stats')));

/* ROUTES */
const animeRoute = require('./routes/Anime');
const imageRoute = require('./routes/Image');
const nsfwRoute = require('./routes/Nsfw');
const randomRoute = require('./routes/Random');

app.use('/anime', animeRoute);

app.use('/image', imageRoute);

app.use('/nsfw', nsfwRoute);

app.use('/random', randomRoute);


/* ERROR HANDLING URL */
app.use(function (req, res, next) {
    res.status(404);
    res.status(429);
    res.json({
        "status": 404,
        "short": "Not found.",
        "text": "The route of endpoint that you gave doesn't exist or its wrong.",
        "success": false
    });
});

const listener = app.listen(port, () => {

    console.log(chalk.blue('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    console.log(
        chalk.blue('┃') +
        chalk.green(' [✅] ONLINE') +
        chalk.yellow(' ┃ Listening On Port#') +
        listener.address().port +
        chalk.blue('  ┃')
    );
    console.log(chalk.blue('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
    console.log(
        chalk.hex('#FF0000')('ERROR ') +
        chalk.cyan('L') +
        chalk.green('O') +
        chalk.blue('G') +
        chalk.yellow(' :')
    );

});