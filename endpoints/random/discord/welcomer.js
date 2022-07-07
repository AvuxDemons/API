const canvas = require('canvacord');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { avatar, username, discrim, title, message } = req.query;
        if (!avatar || !username || !discrim || !title || !message)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseurl}/random/discord/welcomer?avatar=<link>&username=<username>&discrim=<discriminator>&title=<title>&message=<message>&background=<link(optional)>`
            });

        const welcome = new canvas.Welcomer()
            .setText('title', title)
            .setColor('title', '#ffffff')
            .setColor('title-border', '#ffffff00')

            .setAvatar(avatar)
            .setColor('avatar', '#ffffff')

            .setUsername(username)
            .setColor('username', '#ffffff')
            .setColor('username-box', '#ffffff00')

            .setDiscriminator(discrim)
            .setColor('hashtag', '#ffffff')
            .setColor('discriminator', '#ffffff')
            .setColor('discriminator-box', '#ffffff00')

            .setText('message', message)
            .setColor('message', '#ffffff')
            .setColor('message-box', '#ffffff00')

            .setColor('member-count', '#ffffff00')

            .setColor('background', '#272727')
            .setColor('border', '#333333')
            .setOpacity('border', 1);

        if (background) {
            welcome.setBackground(background);
            welcome.setOpacity('border', 0);
        }

        if (color) {
            welcome.setColor('avatar', '#' + color);
            welcome.setColor('title', '#' + color);
            welcome.setColor('username', '#' + color);
            welcome.setColor('hashtag', '#' + color);
            welcome.setColor('discriminator', '#' + color);
            welcome.setColor('message', '#' + color);
        }

        if (border) {
            welcome.setColor('title-border', '#' + border);
            welcome.setColor('username-box', '#' + border);
            welcome.setColor('discriminator-box', '#' + border);
            welcome.setColor('message-box', '#' + border);
        }

        // if (rank) {
        // welcome.setRank(parseInt(rank))
        // }

        welcome.build().then(data => {
            const result = Buffer.from(data, 'base64');
            res.setHeader('content-type', 'image/jpeg');
            res.end(result);
        });
    }
};