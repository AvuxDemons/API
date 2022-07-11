const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2 } = req.query;
        if (!avatar1 || !avatar2)
            return res.json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseurl}/image/doublestonk?avatar1=<avatar link>&avatar2=<avatar ink>`
            });
        let img = await new DIG.DoubleStonk().getImage(avatar1.replace('.webp', '.png'), avatar2.replace('.webp', '.png'));
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};