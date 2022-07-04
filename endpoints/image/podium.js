const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar1, avatar2, avatar3, name1, name2, name3 } = req.query;
        if (!avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>`
            });
        if (!avatar2)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>`
            });
        if (!avatar3)
            return res.json({
                message: 'Please Provide Avatar 3 Link',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>`
            });
        if (!name1)
            return res.json({
                message: 'Please Provide Name 1',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>`
            });
        if (!name2)
            return res.json({
                message: 'Please Provide Name 2',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>&name2=<name>`
            });
        if (!name3)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: `${config.baseur}/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>&name2=<name>&name3=<name>`
            });
        try {
            let img = await new DIG.Podium().getImage(
                avatar1,
                avatar2,
                avatar3,
                name1,
                name2,
                name3
            );
            res.setHeader('content-type', 'image/jpeg').end(img);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};