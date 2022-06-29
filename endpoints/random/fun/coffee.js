const client = require('alexflipnote.js');
const alexclient = new client('0cymSxFtqE9_e0UKc0tpQtLx6SW07M3om19QU9L_');

module.exports = {
    run: async (req, res, next) => {
        result = await alexclient.image.coffee();
        res.statusCode = 200;
        res.json({
            result
        });
    }
};