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

const discord = ['check', 'rankcard', 'user', 'vote', 'welcomer'];

discord.forEach(end => {
    router.get('/search/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/random/discord/${end}`);
        endpoint.run(req, res)
    });
});

/*
  ___ _   _ _  _ 
 | __| | | | \| |
 | _|| |_| | .` |
 |_|  \___/|_|\_| cat:fun

 */

const endpoint = ['cat', 'dog', 'face', 'insult', 'pickuplines', 'sadcat'];

endpoint.forEach(img => {
    router.get('/fun/' + img, async (req, res) => {
        const image = require(`../src/${img}`);
        res.status(200).json({
            result: image[Math.floor(Math.random() * image.length)],
            total_src: image.length
        });
    });
});

const fun = ['8ball', 'ascii', 'chatbot', 'coffee', 'meme', 'minesweeper', 'owoify', 'ppsize', 'reverse', 'simsimi'];

fun.forEach(end => {
    router.get('/fun/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/random/fun/${end}`);
        endpoint.run(req, res)
    });
});

/*
  ___ _  _ ___ ___  
 |_ _| \| | __/ _ \ 
  | || .` | _| (_) |
 |___|_|\_|_| \___/  cat:info	   

*/

const info = ['appstore', 'covid', 'github', 'playstore', 'tiktok', 'twitch', 'wikipics'];

info.forEach(end => {
    router.get('/search/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/random/info/${end}`);
        endpoint.run(req, res)
    });
});

/*
  ___ ___   _   ___  ___ _  _ 
 / __| __| /_\ | _ \/ __| || |
 \__ \ _| / _ \|   / (__| __ |
 |___/___/_/ \_\_|_\\___|_||_| cat:search

 */

const search = ['image', 'lyrics', 'movie', 'youtube', 'youtubev2'];

search.forEach(end => {
    router.get('/search/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/random/search/${end}`);
        endpoint.run(req, res)
    });
});

/*
  _____ ___   ___  _    ___ 
 |_   _/ _ \ / _ \| |  / __|
   | || (_) | (_) | |__\__ \
   |_| \___/ \___/|____|___/ cat:tools

*/

const tools = ['apikey', 'avatar', 'base64', 'binary', 'fakemail', 'hastebin', 'imgbb', 'imgur', 'ip', 'nameserver', 'password', 'progress', 'shortener', 'time', 'translate', 'username', 'uuid'];

tools.forEach(end => {
    router.get('/tools/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/random/tools/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;