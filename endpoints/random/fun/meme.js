const memes = require("random-memes");

module.exports = {
    run: async (req, res, next) => {
        memes.random().then(meme => {
            res.statusCode = 200;
            res.json({
                id: meme.id,
                category: meme.category,
                caption: meme.caption,
                image: meme.image
            })
        })
    }
};