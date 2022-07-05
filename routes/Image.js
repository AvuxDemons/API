const express = require('express');
const router = express.Router();

/*
  ___ __  __    _    ____ _____ 
 |_ _|  \/  |  / \  / ___| ____|
  | || |\/| | / _ \| |  _|  _|  
  | || |  | |/ ___ \ |_| | |___ 
 |___|_|  |_/_/   \_\____|_____| cat:image
 */

const images = require('./image.json');

images.forEach(end => {
    router.get('/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/image/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;