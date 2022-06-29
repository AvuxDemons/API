const anime = require(`../../../src/pickuplines.json`);

module.exports = {
    run: async (req, res, next) => {
        rand = Math.floor(Math.random() * anime.length);
        let img = anime[rand];
        res.statusCode = 200;
        res.json({
            captions: `${img}`
        });
    }
};