const express = require('express');
const router = express.Router();

/*
     _    _   _ ___ __  __ _____ 
    / \  | \ | |_ _|  \/  | ____|
   / _ \ |  \| || || |\/| |  _|  
  / ___ \| |\  || || |  | | |___ 
 /_/   \_\_| \_|___|_|  |_|_____| cat:anime

*/

const endpoint = require('../src/-anime.json');

endpoint.forEach(img => {
    router.get('/' + img, async (req, res) => {
        const image = require(`../src/${img}`);
        res.statusCode = 200;
        res.json({
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

const src = '../endpoints/anime/';

router.get('/search/anime', (req, res, next) => {
    const endpoint = require(`${src}anime`);
    endpoint.run(req, res)
});

router.get('/search/mangadex', (req, res, next) => {
    const endpoint = require(`${src}mangadex`);
    endpoint.run(req, res)
});

router.get('/search/manga', (req, res, next) => {
    const endpoint = require(`${src}manga`);
    endpoint.run(req, res)
});

router.get('/search/stream', (req, res, next) => {
    const endpoint = require(`${src}stream`);
    endpoint.run(req, res)
});

router.get('/search/wallpaper/desktop', (req, res, next) => {
    const endpoint = require(`${src}wallpaper`);
    endpoint.run(req, res)
});

router.get('/search/wallpaper/mobile', (req, res, next) => {
    const endpoint = require(`${src}mobile`);
    endpoint.run(req, res)
});

module.exports = router;