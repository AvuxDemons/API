const canvacord = require('canvacord');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { avatar, level, xpnow, xpreq, status, username, discrim } = req.query;

        if (!avatar || !level || !xpnow || !xpreq || !status || !username || !discrim)
            if (!discrim)
                return res.status(400).json({
                    result: 'Invalid Query Parameter',
                    usage: `${config.baseurl}/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>`
                });

        const background = background;
        const color = color;

        const rank = new canvacord.Rank()
            .setAvatar(avatar.replace('webp', 'png'))
            .setLevel(parseInt(level))
            .setCurrentXP(parseInt(xpnow))
            .setRequiredXP(parseInt(xpreq))
            .setRank(1, 'RANK', false)
            .setStatus(status)
            .setUsername(username)
            .setDiscriminator(discrim);

        if (background) {
            rank.setBackground('IMAGE', background);
        }

        if (rank) {
            rank.setRank(parseInt(rank));
        }

        if (color) {
            rank.setProgressBar('#' + color, 'COLOR');
            rank.setLevelColor('#FFFFFF', '#' + color);
            rank.setRankColor('#FFFFFF', '#' + color);
        }

        rank.build().then(data => {
            const result = Buffer.from(data, 'base64');
            res.setHeader('content-type', 'image/jpeg');
            res.end(result);
        });
    }
};