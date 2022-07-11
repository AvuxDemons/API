const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2, avatar3, name1, name2, name3 } = req.query;
        if (!avatar1 || !avatar2 || !avatar3 || !name1 || !name2 || !name3)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>&name2=<name>&name3=<name>`
            });
        let img = await new DIG.Podium().getImage(
            avatar1.replace('.webp', '.png'),
            avatar2.replace('.webp', '.png'),
            avatar3.replace('.webp', '.png'),
            name1,
            name2,
            name3
        );
        res.setHeader('content-type', 'image/jpeg').end(img);
    }
};