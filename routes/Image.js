const express = require('express');
const router = express.Router();

/*
  ___ __  __    _    ____ _____ 
 |_ _|  \/  |  / \  / ___| ____|
  | || |\/| | / _ \| |  _|  _|  
  | || |  | |/ ___ \ |_| | |___ 
 |___|_|  |_/_/   \_\____|_____| cat:image
 */

const images = [
   'ads', 'affect', 'batslap', 'beautiful', 'bed', 'blur', 'bobross', 'captcha', 'circle', 'communist', 'confusedstonk', 'delete', 'discordblack', 'discordblue', 'doublestonk', 'ejected', 'facepalm', 'gay', 'glitch', 'grab', 'grave', 'greyscale', 'gun', 'hitler', 'horny', 'invert', 'jail', 'karaba', 'kissing', 'like', 'lolice', 'magik', 'meeting', 'mexico', 'notstonk', 'passed', 'petpet', 'podium', 'pornhub', 'poutine', 'pray', 'presetation', 'recaptcha', 'rip', 'sepia', 'ship', 'simp', 'simpcard', 'spanking', 'stonk', 'supreme', 'trash', 'triggered', 'tweet', 'wanted', 'weather', 'wumpus', 'youtube'
]

images.forEach(end => {
    router.get('/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/image/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;