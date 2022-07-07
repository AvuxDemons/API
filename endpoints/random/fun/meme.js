const memes = require("random-memes");

module.exports = {
    run: async (req, res, next) => {
        memes.random().then(meme => {
            res.status(200).json({
                id: meme.id,
                category: meme.category,
                caption: meme.caption,
                image: meme.image
            })
        })
    }
};