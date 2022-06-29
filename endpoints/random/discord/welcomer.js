const canvas = require('canvacord');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>'
            });
        if (!req.query.username)
            return res.json({
                message: 'Please Provide Username',
                usage: 'https://api.avux.ga/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>'
            });
        if (!req.query.discrim)
            return res.json({
                message: 'Please Provide Discriminator',
                usage: 'https://api.avux.ga/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>'
            });
        if (!req.query.title)
            return res.json({
                message: 'Please Provide Username',
                usage: 'https://api.avux.ga/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>'
            });
        if (!req.query.message)
            return res.json({
                message: 'Please Provide Username',
                usage: 'https://api.avux.ga/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>'
            });

        const welcome = new canvas.Welcomer()
            .setText('title', req.query.title)
            .setColor('title', '#ffffff')
            .setColor('title-border', '#ffffff00')

            .setAvatar(req.query.avatar)
            .setColor('avatar', '#ffffff')

            .setUsername(req.query.username)
            .setColor('username', '#ffffff')
            .setColor('username-box', '#ffffff00')

            .setDiscriminator(req.query.discrim)
            .setColor('hashtag', '#ffffff')
            .setColor('discriminator', '#ffffff')
            .setColor('discriminator-box', '#ffffff00')

            .setText('message', req.query.message)
            .setColor('message', '#ffffff')
            .setColor('message-box', '#ffffff00')

            .setColor('member-count', '#ffffff00')

            .setColor('background', '#272727')
            .setColor('border', '#333333')
            .setOpacity('border', 1);

        if (req.query.background) {
            welcome.setBackground(req.query.background);
            welcome.setOpacity('border', 0);
        }

        if (req.query.color) {
            welcome.setColor('avatar', '#' + req.query.color);
            welcome.setColor('title', '#' + req.query.color);
            welcome.setColor('username', '#' + req.query.color);
            welcome.setColor('hashtag', '#' + req.query.color);
            welcome.setColor('discriminator', '#' + req.query.color);
            welcome.setColor('message', '#' + req.query.color);
        }

        if (req.query.border) {
            welcome.setColor('title-border', '#' + req.query.border);
            welcome.setColor('username-box', '#' + req.query.border);
            welcome.setColor('discriminator-box', '#' + req.query.border);
            welcome.setColor('message-box', '#' + req.query.border);
        }

        // if (req.query.rank) {
        // welcome.setRank(parseInt(req.query.rank))
        // }

        welcome.build().then(data => {
            const result = Buffer.from(data, 'base64');
            res.setHeader('content-type', 'image/jpeg');
            res.end(result);
        });
    }
};