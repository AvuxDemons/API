const express = require('express');
const router = express.Router();

/*
     _    _   _ ___ __  __ _____ 
    / \  | \ | |_ _|  \/  | ____|
   / _ \ |  \| || || |\/| |  _|  
  / ___ \| |\  || || |  | | |___ 
 /_/   \_\_| \_|___|_|  |_|_____| cat:anime

*/

const endpoint = require('../endpoints/anime/anime.json');

endpoint.forEach(img => {
    router.get('/' + img, async (req, res) => {
        const image = require(`../src/${img}`);
        res.status(200).json({
            result: image[Math.floor(Math.random() * image.length)],
            total_image: image.length
        });
    });
});

/*
  ___ ___   _   ___  ___ _  _ 
 / __| __| /_\ | _ \/ __| || |
 \__ \ _| / _ \|   / (__| __ |
 |___/___/_/ \_\_|_\\___|_||_| cat:animesearch
*/

const search = ['anime', 'mangadex', 'manga', 'stream', 'wallpaper/desktop', 'wallpaper/mobile'];

search.forEach(end => {
    router.get('/search/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/anime/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;