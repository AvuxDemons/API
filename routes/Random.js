const express = require('express');
const router = express.Router();
/*
  ____      _    _   _ ____   ___  __  __ 
 |  _ \    / \  | \ | |  _ \ / _ \|  \/  |
 | |_) |  / _ \ |  \| | | | | | | | |\/| |
 |  _ <  / ___ \| |\  | |_| | |_| | |  | |
 |_| \_\/_/   \_\_| \_|____/ \___/|_|  |_| cat:random

 */
/*
  ___ ___ ___  ___ ___  ___ ___  
 |   \_ _/ __|/ __/ _ \| _ \   \ 
 | |) | |\__ \ (_| (_) |   / |) |
 |___/___|___/\___\___/|_|_\___/  cat:discord

 */
const discord = '../endpoints/random/discord/'

router.get('/discord/check', (req, res, next) => {
    const endpoint = require(`${discord}check`);
    endpoint.run(req, res)
});

router.get('/discord/rankcard', (req, res, next) => {
    const endpoint = require(`${discord}rankcard`);
    endpoint.run(req, res)
});

router.get('/discord/user', (req, res, next) => {
    const endpoint = require(`${discord}user`);
    endpoint.run(req, res)
});

router.get('/discord/vote', (req, res, next) => {
    const endpoint = require(`${discord}vote`);
    endpoint.run(req, res)
});

router.get('/discord/welcomer', (req, res, next) => {
    const endpoint = require(`${discord}welcomer`);
    endpoint.run(req, res)
});

/*
  ___ _   _ _  _ 
 | __| | | | \| |
 | _|| |_| | .` |
 |_|  \___/|_|\_| cat:fun

 */

const fun = '../endpoints/random/fun/'

const endpoint = ['cat', 'dog', 'sadcat'];

endpoint.forEach(img => {
    router.get('/fun/' + img, async (req, res) => {
        const image = require(`../src/${img}`);
        res.statusCode = 200;
        res.json({
            result: image[Math.floor(Math.random() * image.length)],
            total_image: image.length
        });
    });
});

router.get('/fun/8ball', (req, res, next) => {
    const endpoint = require(`${fun}8ball`);
    endpoint.run(req, res)
});

router.get('/fun/ascii', (req, res, next) => {
    const endpoint = require(`${fun}ascii`);
    endpoint.run(req, res)
});

router.get('/fun/chatbot', (req, res, next) => {
    const endpoint = require(`${fun}chatbot`);
    endpoint.run(req, res)
});

router.get('/fun/coffee', (req, res, next) => {
    const endpoint = require(`${fun}coffee`);
    endpoint.run(req, res)
});

router.get('/fun/face', (req, res, next) => {
    const endpoint = require(`${fun}face`);
    endpoint.run(req, res)
});

router.get('/fun/insult', (req, res, next) => {
    const endpoint = require(`${fun}insult`);
    endpoint.run(req, res)
});

router.get('/fun/meme', (req, res, next) => {
    const endpoint = require(`${fun}meme`);
    endpoint.run(req, res)
});

router.get('/fun/minesweeper', (req, res, next) => {
    const endpoint = require(`${fun}minesweeper`);
    endpoint.run(req, res)
});

router.get('/fun/owoify', (req, res, next) => {
    const endpoint = require(`${fun}owoify`);
    endpoint.run(req, res)
});

router.get('/fun/pickuplines', (req, res, next) => {
    const endpoint = require(`${fun}pickuplines`);
    endpoint.run(req, res)
});

router.get('/fun/ppsize', (req, res, next) => {
    const endpoint = require(`${fun}ppsize`);
    endpoint.run(req, res)
});

router.get('/fun/reverse', (req, res, next) => {
    const endpoint = require(`${fun}reverse`);
    endpoint.run(req, res)
});

router.get('/fun/simsimi', (req, res, next) => {
    const endpoint = require(`${fun}simsimi`);
    endpoint.run(req, res)
});

/*
  ___ _  _ ___ ___  
 |_ _| \| | __/ _ \ 
  | || .` | _| (_) |
 |___|_|\_|_| \___/  cat:info	   

*/

const info = '../endpoints/random/info/'

router.get('/info/routerstore', (req, res, next) => {
    const endpoint = require(`${info}routerstore`);
    endpoint.run(req, res)
});

router.get('/info/covid', (req, res, next) => {
    const endpoint = require(`${info}covid`);
    endpoint.run(req, res)
});

router.get('/info/github', (req, res, next) => {
    const endpoint = require(`${info}github`);
    endpoint.run(req, res)
});

router.get('/info/playstore', (req, res, next) => {
    const endpoint = require(`${info}playstore`);
    endpoint.run(req, res)
});

router.get('/info/tiktok', (req, res, next) => {
    const endpoint = require(`${info}tiktok`);
    endpoint.run(req, res)
});

router.get('/info/twitch', (req, res, next) => {
    const endpoint = require(`${info}twitch`);
    endpoint.run(req, res)
});

router.get('/info/wikipics', (req, res, next) => {
    const endpoint = require(`${info}wikipics`);
    endpoint.run(req, res)
});

/*
  ___ ___   _   ___  ___ _  _ 
 / __| __| /_\ | _ \/ __| || |
 \__ \ _| / _ \|   / (__| __ |
 |___/___/_/ \_\_|_\\___|_||_| cat:search

 */

const search = '../endpoints/random/search/'

router.get('/search/image', (req, res, next) => {
    const endpoint = require(`${search}image`);
    endpoint.run(req, res)
});

router.get('/search/lyrics', (req, res, next) => {
    const endpoint = require(`${search}lyrics`);
    endpoint.run(req, res)
});

router.get('/search/movie', (req, res, next) => {
    const endpoint = require(`${search}movie`);
    endpoint.run(req, res)
});

router.get('/search/youtube', (req, res, next) => {
    const endpoint = require(`${search}youtube`);
    endpoint.run(req, res)
});

router.get('/search/youtubev2', (req, res, next) => {
    const endpoint = require(`${search}youtubev2`);
    endpoint.run(req, res)
});

/*
  _____ ___   ___  _    ___ 
 |_   _/ _ \ / _ \| |  / __|
   | || (_) | (_) | |__\__ \
   |_| \___/ \___/|____|___/ cat:tools

*/ 

const tools = '../endpoints/random/tools/'

router.get('/tools/apikey', (req, res, next) => {
    const endpoint = require(`${tools}apikey`);
    endpoint.run(req, res)
});

router.get('/tools/avatar', (req, res, next) => {
    const endpoint = require(`${tools}avatar`);
    endpoint.run(req, res)
});

router.get('/tools/base64', (req, res, next) => {
    const endpoint = require(`${tools}base64`);
    endpoint.run(req, res)
});

router.get('/tools/binary', (req, res, next) => {
    const endpoint = require(`${tools}binary`);
    endpoint.run(req, res)
});

router.get('/tools/time', (req, res, next) => {
    const endpoint = require(`${tools}time`);
    endpoint.run(req, res)
});

router.get('/tools/fakemail', (req, res, next) => {
    const endpoint = require(`${tools}fakemail`);
    endpoint.run(req, res)
});

router.get('/tools/hastebin', (req, res, next) => {
    const endpoint = require(`${tools}hastebin`);
    endpoint.run(req, res)
});

router.get('/tools/imgur', (req, res, next) => {
    const endpoint = require(`${tools}imgur`);
    endpoint.run(req, res)
});

router.get('/tools/ip', (req, res, next) => {
    const endpoint = require(`${tools}ip`);
    endpoint.run(req, res)
});

router.get('/tools/nameserver', (req, res, next) => {
    const endpoint = require(`${tools}nameserver`);
    endpoint.run(req, res)
});

router.get('/tools/password', (req, res, next) => {
    const endpoint = require(`${tools}password`);
    endpoint.run(req, res)
});

router.get('/tools/progress', (req, res, next) => {
    const endpoint = require(`${tools}progress`);
    endpoint.run(req, res)
});

router.get('/tools/shortener', (req, res, next) => {
    const endpoint = require(`${tools}shortener`);
    endpoint.run(req, res)
});

router.get('/tools/translate', (req, res, next) => {
    const endpoint = require(`${tools}translate`);
    endpoint.run(req, res)
});

router.get('/tools/uuid', (req, res, next) => {
    const endpoint = require(`${tools}uuid`);
    endpoint.run(req, res)
});

module.exports = router;