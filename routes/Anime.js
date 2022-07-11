const express = require('express');
const router = express.Router();

/*  _    _   _ ___ __  __ _____  / \  | \ | |_ _|  \/  | ____|
   / _ \ |  \| || || |\/| |  _|  
  / ___ \| |\  || || |  | | |___ 
 /_/   \_\_| \_|___|_|  |_|_____| cat:anime

*/

const endpoint = [
    'angry', 'baka', 'banghead', 'bite', 'blowkiss', 'blush', 'bonk', 'boom', 'bored', 'bye', 'cheek', 'claps', 'comfy', 'confuse', 'cry', 'cuddle', 'dab', 'dance', 'deredere', 'disgust', 'drunk', 'eat', 'facepalm', 'fail', 'glare', 'grope', 'handhold', 'happy', 'hi', 'hug', 'kiss', 'laugh', 'lewd', 'lick', 'like', 'morning', 'nope', 'pat', 'peek', 'poke', 'pout', 'punch', 'run', 'sad', 'scared', 'scream', 'shrug', 'sing', 'sip', 'slap', 'sleep', 'smile', 'smug', 'spank', 'stare', 'teehee', 'thinking', 'tickle', 'tired', 'trap', 'tsundere', 'vibe', 'vomit', 'wag', 'wasted', 'yandere'
]

endpoint.forEach(img => {
    router.get('/' + img, async (req, res) => {
        const image = require(`../src/${img}`);
        res.status(200).json({
            result: image[Math.floor(Math.random() * image.length)],
            total_src: image.length
        });
    });
});

/*
  ___ ___   _   ___  ___ _  _ 
 / __| __| /_\ | _ \/ __| || |
 \__ \ _| / _ \|   / (__| __ |
 |___/___/_/ \_\_|_\\___|_||_| cat:animesearch
*/

const search = [
    'anime', 'mangadex', 'manga', 'stream', 'wallpaper/desktop', 'wallpaper/mobile'
];

search.forEach(end => {
    router.get('/search/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/anime/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;