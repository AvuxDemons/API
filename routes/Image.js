const express = require('express');
const router = express.Router();

/*
  ___ __  __    _    ____ _____ 
 |_ _|  \/  |  / \  / ___| ____|
  | || |\/| | / _ \| |  _|  _|  
  | || |  | |/ ___ \ |_| | |___ 
 |___|_|  |_/_/   \_\____|_____| cat:image
 */

const image = '../endpoints/image/';

router.get('/ads', (req, res, next) => {
	const endpoint = require(`${image}ads`);
	endpoint.run(req, res)
});

router.get('/affect', (req, res, next) => {
	const endpoint = require(`${image}affect`);
	endpoint.run(req, res)
});

router.get('/batslap', (req, res, next) => {
	const endpoint = require(`${image}batslap`);
	endpoint.run(req, res)
});

router.get('/beautiful', (req, res, next) => {
	const endpoint = require(`${image}beautiful`);
	endpoint.run(req, res)
});

router.get('/bed', (req, res, next) => {
	const endpoint = require(`${image}bed`);
	endpoint.run(req, res)
});

router.get('/blur', (req, res, next) => {
	const endpoint = require(`${image}blur`);
	endpoint.run(req, res)
});

router.get('/bobross', (req, res, next) => {
	const endpoint = require(`${image}bobross`);
	endpoint.run(req, res)
});

router.get('/captcha', (req, res, next) => {
	const endpoint = require(`${image}captcha`);
	endpoint.run(req, res)
});

router.get('/circle', (req, res, next) => {
	const endpoint = require(`${image}circle`);
	endpoint.run(req, res)
});

router.get('/communist', (req, res, next) => {
	const endpoint = require(`${image}communist`);
	endpoint.run(req, res)
});

router.get('/confusedstonk', (req, res, next) => {
	const endpoint = require(`${image}confusedstonk`);
	endpoint.run(req, res)
});

router.get('/cti', (req, res, next) => {
	const endpoint = require(`${image}cti`);
	endpoint.run(req, res)
});

router.get('/delete', (req, res, next) => {
	const endpoint = require(`${image}delete`);
	endpoint.run(req, res)
});

router.get('/discordblack', (req, res, next) => {
	const endpoint = require(`${image}discordblack`);
	endpoint.run(req, res)
});

router.get('/discordblue', (req, res, next) => {
	const endpoint = require(`${image}discordblue`);
	endpoint.run(req, res)
});

router.get('/dislike', (req, res, next) => {
	const endpoint = require(`${image}dislike`);
	endpoint.run(req, res)
});

router.get('/doublestonk', (req, res, next) => {
	const endpoint = require(`${image}doublestonk`);
	endpoint.run(req, res)
});

router.get('/ejected', (req, res, next) => {
	const endpoint = require(`${image}ejected`);
	endpoint.run(req, res)
});

router.get('/facepalm', (req, res, next) => {
	const endpoint = require(`${image}facepalm`);
	endpoint.run(req, res)
});

router.get('/gay', (req, res, next) => {
	const endpoint = require(`${image}gay`);
	endpoint.run(req, res)
});

router.get('/glitch', (req, res, next) => {
	const endpoint = require(`${image}glitch`);
	endpoint.run(req, res)
});

router.get('/grab', (req, res, next) => {
	const endpoint = require(`${image}grab`);
	endpoint.run(req, res)
});

router.get('/grave', (req, res, next) => {
	const endpoint = require(`${image}grave`);
	endpoint.run(req, res)
});

router.get('/grayscale', (req, res, next) => {
	const endpoint = require(`${image}grayscale`);
	endpoint.run(req, res)
});

router.get('/gun', (req, res, next) => {
	const endpoint = require(`${image}gun`);
	endpoint.run(req, res)
});

router.get('/hearts', (req, res, next) => {
	const endpoint = require(`${image}hearts`);
	endpoint.run(req, res)
});

router.get('/hitler', (req, res, next) => {
	const endpoint = require(`${image}hitler`);
	endpoint.run(req, res)
});

router.get('/horny', (req, res, next) => {
	const endpoint = require(`${image}horny`);
	endpoint.run(req, res)
});

router.get('/invert', (req, res, next) => {
	const endpoint = require(`${image}invert`);
	endpoint.run(req, res)
});

router.get('/jail', (req, res, next) => {
	const endpoint = require(`${image}jail`);
	endpoint.run(req, res)
});

router.get('/karaba', (req, res, next) => {
	const endpoint = require(`${image}karaba`);
	endpoint.run(req, res)
});

router.get('/kissing', (req, res, next) => {
	const endpoint = require(`${image}kissing`);
	endpoint.run(req, res)
});

router.get('/like', (req, res, next) => {
	const endpoint = require(`${image}like`);
	endpoint.run(req, res)
});

router.get('/lolice', (req, res, next) => {
	const endpoint = require(`${image}lolice`);
	endpoint.run(req, res)
});

router.get('/magik', (req, res, next) => {
	const endpoint = require(`${image}magik`);
	endpoint.run(req, res)
});


router.get('/meeting', (req, res, next) => {
	const endpoint = require(`${image}meeting`);
	endpoint.run(req, res)
});

router.get('/mexico', (req, res, next) => {
	const endpoint = require(`${image}mexico`);
	endpoint.run(req, res)
});

router.get('/notstonk', (req, res, next) => {
	const endpoint = require(`${image}notstonk`);
	endpoint.run(req, res)
});

router.get('/passed', (req, res, next) => {
	const endpoint = require(`${image}passed`);
	endpoint.run(req, res)
});

router.get('/petpet', (req, res, next) => {
	const endpoint = require(`${image}petpet`);
	endpoint.run(req, res)
});

router.get('/podium', (req, res, next) => {
	const endpoint = require(`${image}podium`);
	endpoint.run(req, res)
});

router.get('/poutine', (req, res, next) => {
	const endpoint = require(`${image}poutine`);
	endpoint.run(req, res)
});

router.get('/pray', (req, res, next) => {
	const endpoint = require(`${image}pray`);
	endpoint.run(req, res)
});

router.get('/presentation', (req, res, next) => {
	const endpoint = require(`${image}presentation`);
	endpoint.run(req, res)
});

router.get('/recaptcha', (req, res, next) => {
	const endpoint = require(`${image}recaptcha`);
	endpoint.run(req, res)
});

router.get('/rip', (req, res, next) => {
	const endpoint = require(`${image}rip`);
	endpoint.run(req, res)
});

router.get('/sepia', (req, res, next) => {
	const endpoint = require(`${image}sepia`);
	endpoint.run(req, res)
});

router.get('/ship', (req, res, next) => {
	const endpoint = require(`${image}ship`);
	endpoint.run(req, res)
});

router.get('/simp', (req, res, next) => {
	const endpoint = require(`${image}simp`);
	endpoint.run(req, res)
});

router.get('/simpcard', (req, res, next) => {
	const endpoint = require(`${image}simpcard`);
	endpoint.run(req, res)
});

router.get('/spanking', (req, res, next) => {
	const endpoint = require(`${image}spanking`);
	endpoint.run(req, res)
});

router.get('/stonk', (req, res, next) => {
	const endpoint = require(`${image}stonk`);
	endpoint.run(req, res)
});

router.get('/supreme', (req, res, next) => {
	const endpoint = require(`${image}supreme`);
	endpoint.run(req, res)
});

router.get('/trash', (req, res, next) => {
	const endpoint = require(`${image}trash`);
	endpoint.run(req, res)
});

router.get('/triggered', (req, res, next) => {
	const endpoint = require(`${image}triggered`);
	endpoint.run(req, res)
});

router.get('/tweet', (req, res, next) => {
	const endpoint = require(`${image}tweet`);
	endpoint.run(req, res)
});

router.get('/wanted', (req, res, next) => {
	const endpoint = require(`${image}wanted`);
	endpoint.run(req, res)
});

router.get('/weather', (req, res, next) => {
	const endpoint = require(`${image}weather`);
	endpoint.run(req, res)
});

router.get('/wumpus', (req, res, next) => {
	const endpoint = require(`${image}wumpus`);
	endpoint.run(req, res)
});

router.get('/youtube', (req, res, next) => {
	const endpoint = require(`${image}youtube`);
	endpoint.run(req, res)
});

module.exports = router;