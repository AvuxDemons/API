const petPetGif = require('pet-pet-gif');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/petpet?avatar=<avatar link`
            });
        let img = await petPetGif(avatar.replace('.webp', '.png'));
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};