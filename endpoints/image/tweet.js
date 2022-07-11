const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { username, displayname, avatar, comment } = req.query;
        const url = `https://some-random-api.ml/canvas/tweet?username=`;
        if (!username || !displayname || !avatar || !comment)
            return res.json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>`
            });
        const response = await fetch(url + username + '&displayname=' + displayname + '&avatar=' + avatar.replace('.webp', '.png') + '&comment=' + comment);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};