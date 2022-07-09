const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { username, avatar, comment } = req.query;
        const url = `https://some-random-api.ml/canvas/youtube-comment?username=`;

        if (!username || !avatar || !comment)
            return res.json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/youtube?username=<username>&avatar=<avatar_link>&comment=<comment>`
            });
        let avatars = avatar.replace('.webp', '.png');
        const response = await fetch(url + username + '&avatar=' + avatars + '&comment=' + comment);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};