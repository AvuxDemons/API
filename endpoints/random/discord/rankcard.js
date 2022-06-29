const canvacord = require('canvacord');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.level)
            return res.json({
                message: 'Please Provide Level',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.xpnow)
            return res.json({
                message: 'Please Provide Current XP',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.xpreq)
            return res.json({
                message: 'Please Provide XP Required',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.status)
            return res.json({
                message: 'Please Provide Status',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.username)
            return res.json({
                message: 'Please Provide Username',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });
        if (!req.query.discrim)
            return res.json({
                message: 'Please Provide Discriminator',
                usage: 'https://api.avux.ga/random/discord/rankcard?avatar=<link>&username=<username>&discrim=<discriminator>&status=<online/offline/dnd/idle>&xpnow=<exp>&xpreq=<expreq>&level=<level>&rank=<optional rank>&background=<background optional>&color=<hex optional>'
            });

        const background = req.query.background;
        const color = req.query.color;
        const avatar = req.query.avatar

        const rank = new canvacord.Rank()
            .setAvatar(avatar.replace('webp', 'png'))
            .setLevel(parseInt(req.query.level))
            .setCurrentXP(parseInt(req.query.xpnow))
            .setRequiredXP(parseInt(req.query.xpreq))
            .setRank(1, 'RANK', false)
            .setStatus(req.query.status)
            .setUsername(req.query.username)
            .setDiscriminator(req.query.discrim);

        if (req.query.background) {
            rank.setBackground('IMAGE', background);
        }

        if (req.query.rank) {
            rank.setRank(parseInt(req.query.rank));
        }

        if (req.query.color) {
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