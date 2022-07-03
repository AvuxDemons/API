const DIG = require('discord-image-generation');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        const avatar1 = req.query.avatar1;
        const avatar2 = req.query.avatar2;
        const avatar3 = req.query.avatar3;
        const name1 = req.query.name1;
        const name2 = req.query.name2;
        const name3 = req.query.name3;
        if (!req.query.avatar1)
            return res.json({
                message: 'Please Provide Avatar 1 Link',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>'
            });
        if (!req.query.avatar2)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>&avatar2=<avatar link>'
            });
        if (!req.query.avatar3)
            return res.json({
                message: 'Please Provide Avatar 3 Link',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>'
            });
        if (!req.query.name1)
            return res.json({
                message: 'Please Provide Name 1',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>'
            });
        if (!req.query.name2)
            return res.json({
                message: 'Please Provide Name 2',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>&name2=<name>'
            });
        if (!req.query.name3)
            return res.json({
                message: 'Please Provide An Avatar 2 Link',
                usage: 'https://api.avux.ga/image/podium?avatar1=<avatar link>&avatar2=<avatar link>&avatar3=<avatar link>&name1=<name>&name2=<name>&name3=<name>'
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
            res.setHeader('content-type', 'image/jpeg');
            res.end(img);
        } catch (err) {
            res.json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};